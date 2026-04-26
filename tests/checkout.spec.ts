import { test, expect, Page } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { config, url } from './config/testConfig';

const testEmail = `testcheckout+${Date.now()}@gmail.com`;
const testPassword = config.users.standard.password;

const billingData = {
  firstName: 'Test',
  lastName: 'User',
  email: testEmail,
  country: 'United Kingdom',
  city: 'London',
  address: '123 Test Street',
  zip: 'SW1A 1AA',
  phone: '02079460868',
};

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const registerPage = new RegisterPage(page);

  await registerPage.navigate();
  await registerPage.register({
    gender: 'Female',
    firstName: 'Test',
    lastName: 'User',
    email: testEmail,
    password: testPassword,
  });
  await context.close();
});

// Logs in, adds a product to cart, accepts terms, and proceeds to checkout
async function loginAndGoToCheckout(page: Page, email: string, password: string): Promise<void> {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login({ email, password });

  await page.goto(url('/search?q=Blue+Jeans'));
  await page.locator('.product-title a').first().click();
  const addToCartResponse = page.waitForResponse(
    resp => resp.url().includes('/addproducttocart/') && resp.status() === 200
  );
  await page.locator('input[value="Add to cart"]').click();
  await addToCartResponse;

  await page.goto(url('/cart'));
  await page.waitForLoadState('domcontentloaded');
  const termsCheckbox = page.locator('#termsofservice');
  if (await termsCheckbox.isVisible()) {
    await termsCheckbox.check();
  }
  await page.locator('#checkout').click();
  await page.waitForURL(/checkout/);
}

test.describe('4.7 Checkout Flow', () => {
  test.describe.configure({ mode: 'serial', timeout: 120000 });

  test('TC-CHK-01: Complete checkout - Purchase Order @smoke', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await loginAndGoToCheckout(page, testEmail, testPassword);

    await checkoutPage.fillBillingAddress({ ...billingData, shipToSameAddress: true });
    await checkoutPage.selectDefaultShippingMethod();
    await checkoutPage.selectPaymentMethod('Purchase Order');
    await checkoutPage.fillPurchaseOrderInfo('PO-TEST-001');
    await checkoutPage.confirmOrder();

    await expect(page).toHaveURL(/checkout\/completed/);
    await expect(checkoutPage.orderNumber).toBeVisible();
  });

  test('TC-CHK-02: Complete checkout — Credit Card', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await loginAndGoToCheckout(page, testEmail, testPassword);

    await checkoutPage.fillBillingAddress({ ...billingData, shipToSameAddress: true });
    await checkoutPage.selectDefaultShippingMethod();
    await checkoutPage.selectPaymentMethod('Credit Card');
    await checkoutPage.fillCreditCardInfo({
      name: 'Test User',
      number: '4111111111111111',
      expireMonth: '1',
      expireYear: '2030',
      cvv: '123',
    });
    await checkoutPage.confirmOrder();

    await expect(page).toHaveURL(/checkout\/completed/);
    await expect(checkoutPage.orderNumber).toBeVisible();
  });

  test('TC-CHK-03: Checkout with empty billing fields', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login({ email: testEmail, password: testPassword });

    await page.goto(url('/search?q=Blue+Jeans'));
    await page.locator('.product-title a').first().click();
    const addToCartResponse = page.waitForResponse(
      resp => resp.url().includes('/addproducttocart/') && resp.status() === 200
    );
    await page.locator('input[value="Add to cart"]').click();
    await addToCartResponse;

    await checkoutPage.navigate();

    // Ensure new-address form is shown, leave all fields empty, click Continue
    await checkoutPage.selectNewBillingAddress();
    await checkoutPage.billingContinue.click();

    await expect(checkoutPage.validationErrors.first()).toBeVisible();
  });

  test('TC-CHK-04: Checkout — different shipping method', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await loginAndGoToCheckout(page, testEmail, testPassword);

    await checkoutPage.fillBillingAddress({ ...billingData, shipToSameAddress: true });
    await checkoutPage.selectShippingMethod('Next Day Air');
    await checkoutPage.selectPaymentMethod('Purchase Order');
    await checkoutPage.fillPurchaseOrderInfo('PO-TEST-004');
    await checkoutPage.confirmOrder();

    await expect(page).toHaveURL(/checkout\/completed/);
    await expect(checkoutPage.orderNumber).toBeVisible();
  });

  test('TC-CHK-05: Checkout — shipping same as billing', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await loginAndGoToCheckout(page, testEmail, testPassword);

    await checkoutPage.fillBillingAddress({ ...billingData, shipToSameAddress: true });

    // Shipping address step should be skipped — shipping method step becomes active
    if (await checkoutPage.shippingAddressContinue.isVisible({ timeout: 1000 })) {
      await checkoutPage.continueShippingAddressIfNeeded();
    }

    await expect(checkoutPage.shippingMethodContinue).toBeVisible();
  });

  test('TC-CHK-06: Order confirmation details', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await loginAndGoToCheckout(page, testEmail, testPassword);

    await checkoutPage.fillBillingAddress({ ...billingData, shipToSameAddress: true });
    await checkoutPage.selectDefaultShippingMethod();
    await checkoutPage.selectPaymentMethod('Purchase Order');
    await checkoutPage.fillPurchaseOrderInfo('PO-TEST-006');
    await checkoutPage.confirmOrder();

    await expect(page).toHaveURL(/checkout\/completed/);
    await expect(checkoutPage.thankYouMessage).toBeVisible();
    await expect(checkoutPage.orderNumber).toBeVisible();
    await expect(checkoutPage.orderSummarySection).toBeVisible();
  });

  test('TC-CHK-07: Cannot checkout with empty cart', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login({ email: testEmail, password: testPassword });

    // Navigate to checkout with nothing in cart — should redirect to cart
    await page.goto(url('/checkout/onepagecheckout'));

    await expect(page).toHaveURL(/\/cart/);
    await expect(page.getByText('Your Shopping Cart is empty!')).toBeVisible();
  });

  test('TC-CHK-08: Order appears in account history', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await loginAndGoToCheckout(page, testEmail, testPassword);

    await checkoutPage.fillBillingAddress({ ...billingData, shipToSameAddress: true });
    await checkoutPage.selectDefaultShippingMethod();
    await checkoutPage.selectPaymentMethod('Purchase Order');
    await checkoutPage.fillPurchaseOrderInfo('PO-TEST-008');
    await checkoutPage.confirmOrder();

    await expect(page).toHaveURL(/checkout\/completed/);

    await page.goto(url('/customer/orders'));

    await expect(page).toHaveURL(/customer\/orders/);
    await expect(page.getByText(/Order Number:\s*\d+/).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Details' }).first()).toBeVisible();
  });

});
