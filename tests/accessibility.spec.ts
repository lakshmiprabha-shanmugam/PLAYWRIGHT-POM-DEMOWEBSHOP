import { test, expect, Page, TestInfo } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { config, url } from './config/testConfig';

const blockingImpacts = new Set(['critical', 'serious']);
const accessibilityEmail = `a11y+${Date.now()}@demo.test`;
const accessibilityPassword = config.users.standard.password;

async function runAccessibilityScan(page: Page, testInfo: TestInfo, pageName: string): Promise<void> {
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze();

  const blockingViolations = results.violations.filter(
    violation => blockingImpacts.has(violation.impact || '')
  );
  const reportOnlyViolations = results.violations.filter(
    violation => !blockingImpacts.has(violation.impact || '')
  );

  await testInfo.attach(`${pageName}-axe-violations.json`, {
    body: JSON.stringify(results.violations, null, 2),
    contentType: 'application/json',
  });

  await testInfo.attach(`${pageName}-axe-summary.json`, {
    body: JSON.stringify(
      {
        page: pageName,
        totalViolations: results.violations.length,
        blockingViolations: blockingViolations.length,
        reportOnlyViolations: reportOnlyViolations.length,
        blockingRuleIds: blockingViolations.map(violation => violation.id),
      },
      null,
      2
    ),
    contentType: 'application/json',
  });

  const blockingSummary = blockingViolations.map(violation => ({
    id: violation.id,
    impact: violation.impact,
    help: violation.help,
    nodes: violation.nodes.length,
    targets: violation.nodes.slice(0, 3).map(node => node.target.join(' ')),
  }));

  expect(
    blockingSummary,
    `${pageName} has critical/serious accessibility violations. See ${pageName}-axe-violations.json in the report attachments.`
  ).toEqual([]);
}

async function addProductToCart(page: Page, searchTerm: string): Promise<void> {
  await page.goto(url(`/search?q=${encodeURIComponent(searchTerm)}`));
  await page.locator('.product-title a').first().click();
  const addToCartButton = page.locator('.product-essential input[value="Add to cart"]').first();
  await addToCartButton.waitFor({ state: 'visible' });
  await Promise.all([
    page.waitForResponse(resp => resp.url().includes('/addproducttocart/') && resp.status() === 200),
    addToCartButton.click(),
  ]);
}

async function login(page: Page): Promise<void> {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login({ email: accessibilityEmail, password: accessibilityPassword });
}

test.describe('Accessibility Tests', () => {
  test.describe.configure({ timeout: 120000 });

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const registerPage = new RegisterPage(page);

    await registerPage.navigate();
    await registerPage.register({
      gender: 'Female',
      firstName: 'Accessibility',
      lastName: 'User',
      email: accessibilityEmail,
      password: accessibilityPassword,
    });

    await context.close();
  });

  test('AXE-HOME-01: Homepage has no critical or serious accessibility violations @accessibility', async ({ page }, testInfo) => {
    await page.goto(url('/'));
    await runAccessibilityScan(page, testInfo, 'homepage');
  });

  test('AXE-LOGIN-01: Login page has no critical or serious accessibility violations @accessibility', async ({ page }, testInfo) => {
    await page.goto(url('/login'));
    await runAccessibilityScan(page, testInfo, 'login');
  });

  test('AXE-REGISTER-01: Register page has no critical or serious accessibility violations @accessibility', async ({ page }, testInfo) => {
    await page.goto(url('/register'));
    await runAccessibilityScan(page, testInfo, 'register');
  });

  test('AXE-SEARCH-01: Product search page has no critical or serious accessibility violations @accessibility', async ({ page }, testInfo) => {
    await page.goto(url('/search?q=Blue+Jeans'));
    await runAccessibilityScan(page, testInfo, 'product-search');
  });

  test('AXE-CART-01: Cart page has no critical or serious accessibility violations @accessibility', async ({ page }, testInfo) => {
    await addProductToCart(page, 'Blue Jeans');
    await page.goto(url('/cart'));
    await runAccessibilityScan(page, testInfo, 'cart');
  });

  test('AXE-CHECKOUT-01: Checkout page has no critical or serious accessibility violations @accessibility', async ({ page }, testInfo) => {
    await login(page);
    await addProductToCart(page, 'Blue Jeans');
    await page.goto(url('/cart'));
    await page.locator('#termsofservice').check();
    await page.locator('#checkout').click();
    await page.waitForURL(/checkout/);
    await runAccessibilityScan(page, testInfo, 'checkout');
  });
});
