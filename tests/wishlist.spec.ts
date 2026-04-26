import { test, expect, Page } from '@playwright/test';
import { WishlistPage } from '../pages/WishlistPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { config, url } from './config/testConfig';

const testEmail = `testwishlist+${Date.now()}@gmail.com`;
const testPassword = config.users.standard.password;
const wishlistProduct = 'Health Book';

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const registerPage = new RegisterPage(page);

  await registerPage.navigate();
  await registerPage.register({
    gender: 'Female',
    firstName: 'Wishlist',
    lastName: 'User',
    email: testEmail,
    password: testPassword,
  });
  await context.close();
});

async function loginAndAddToWishlist(page: Page, email: string, password: string, searchTerm: string) {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login({ email, password });

  await addProductToWishlist(page, searchTerm);
}

async function addProductToWishlist(page: Page, searchTerm: string) {
  await page.goto(url(`/search?q=${encodeURIComponent(searchTerm)}`));
  const productHref = await page.locator('.product-title a').first().getAttribute('href');
  await page.goto(productHref!);
  await page.waitForLoadState('domcontentloaded');

  const wishlistResponse = page.waitForResponse(
    resp => resp.url().includes('/addproducttocart/') && resp.status() === 200
  );
  await page.locator('input[value="Add to wishlist"]').click();
  await wishlistResponse;
}

test.describe('4.6 Wishlist', () => {
  test.describe.configure({ mode: 'serial', timeout: 120000 });

  test('TC-WISH-01: Add item to wishlist @smoke', async ({ page }) => {
    const wishlistPage = new WishlistPage(page);

    await loginAndAddToWishlist(page, testEmail, testPassword, wishlistProduct);

    await expect(wishlistPage.successNotification).toBeVisible();
    await expect(wishlistPage.wishlistQty).not.toHaveText('(0)');
  });

  test('TC-WISH-02: View wishlist', async ({ page }) => {
    const wishlistPage = new WishlistPage(page);

    await loginAndAddToWishlist(page, testEmail, testPassword, wishlistProduct);

    await wishlistPage.wishlistHeaderLink.click();

    await expect(page).toHaveURL(/wishlist/);
    await expect(wishlistPage.wishlistItems.first()).toBeVisible();
    await expect(wishlistPage.productNames.first()).toBeVisible();
    await expect(wishlistPage.unitPrices.first()).toBeVisible();
  });

  test('TC-WISH-03: Add to cart from wishlist', async ({ page }) => {
    const wishlistPage = new WishlistPage(page);

    await loginAndAddToWishlist(page, testEmail, testPassword, wishlistProduct);
    await wishlistPage.navigate();

    await wishlistPage.addItemToCartFromWishlist(0);

    await expect(wishlistPage.cartQty).not.toHaveText('(0)');
  });

  test('TC-WISH-04: Remove item from wishlist', async ({ page }) => {
    const wishlistPage = new WishlistPage(page);

    await loginAndAddToWishlist(page, testEmail, testPassword, wishlistProduct);
    await wishlistPage.navigate();

    // Clear any leftover items from previous runs, then re-add exactly one
    await wishlistPage.removeAllItems();
    await addProductToWishlist(page, wishlistProduct);

    await wishlistPage.navigate();
    const countBefore = await wishlistPage.getItemCount();

    await wishlistPage.removeItem(0);

    const countAfter = await wishlistPage.getItemCount();
    expect(countAfter).toBe(countBefore - 1);
  });

  test('TC-WISH-05: Guest can add item to wishlist', async ({ page }) => {
    // Guest session — no login
    await addProductToWishlist(page, wishlistProduct);

    await expect(page).toHaveURL(/health/);
    await expect(page.locator('.bar-notification.success')).toBeVisible();
  });

});
