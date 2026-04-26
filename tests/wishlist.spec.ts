import { test, expect, Page } from '@playwright/test';
import { WishlistPage } from '../pages/WishlistPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { config, url } from './config/testConfig';

const testEmail = `testwishlist+${Date.now()}@gmail.com`;
const testPassword = config.users.standard.password;

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

// Logs in and adds a product to the wishlist via AjaxCart
// (DemoWebShop does not render an "Add to wishlist" button in the product page DOM;
// the site exposes the same NopCommerce AJAX endpoint used by the hidden button)
async function loginAndAddToWishlist(page: Page, email: string, password: string, searchTerm: string) {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login({ email, password });

  await page.goto(url(`/search?q=${encodeURIComponent(searchTerm)}`));
  const productHref = await page.locator('.product-title a').first().getAttribute('href');
  await page.goto(productHref!);
  await page.waitForLoadState('domcontentloaded');

  // Derive product ID from the Add-to-cart button id ("add-to-cart-button-{id}")
  const productId = await page.evaluate(() => {
    const btn = document.querySelector('[id^="add-to-cart-button-"]');
    return btn?.id.replace('add-to-cart-button-', '') ?? null;
  });

  // Cart type 2 = Wishlist; this is the same endpoint the (hidden) wishlist button calls
  await page.evaluate((pid) => {
    (window as any).AjaxCart.addproducttocart_details(`/addproducttocart/details/${pid}/2`);
  }, productId);
}

test.describe('4.6 Wishlist', () => {

  test('TC-WISH-01: Add item to wishlist @smoke', async ({ page }) => {
    const wishlistPage = new WishlistPage(page);

    await loginAndAddToWishlist(page, testEmail, testPassword, 'Blue Jeans');

    await expect(wishlistPage.successNotification).toBeVisible();
    await expect(wishlistPage.wishlistQty).not.toHaveText('(0)');
  });

  test('TC-WISH-02: View wishlist', async ({ page }) => {
    const wishlistPage = new WishlistPage(page);

    await loginAndAddToWishlist(page, testEmail, testPassword, 'Blue Jeans');

    await wishlistPage.wishlistHeaderLink.click();

    await expect(page).toHaveURL(/wishlist/);
    await expect(wishlistPage.wishlistItems.first()).toBeVisible();
    await expect(wishlistPage.productNames.first()).toBeVisible();
    await expect(wishlistPage.unitPrices.first()).toBeVisible();
  });

  test('TC-WISH-03: Add to cart from wishlist', async ({ page }) => {
    const wishlistPage = new WishlistPage(page);

    await loginAndAddToWishlist(page, testEmail, testPassword, 'Blue Jeans');
    await wishlistPage.navigate();

    await wishlistPage.addItemToCartFromWishlist(0);

    await expect(wishlistPage.cartQty).not.toHaveText('(0)');
  });

  test('TC-WISH-04: Remove item from wishlist', async ({ page }) => {
    const wishlistPage = new WishlistPage(page);

    await loginAndAddToWishlist(page, testEmail, testPassword, 'Blue Jeans');
    await wishlistPage.navigate();

    // Clear any leftover items from previous runs, then re-add exactly one
    await wishlistPage.removeAllItems();
    await page.goto(url('/search?q=Blue+Jeans'));
    await page.locator('.product-title a').first().click();
    await page.locator('input[value="Add to wishlist"]').click();

    await wishlistPage.navigate();
    const countBefore = await wishlistPage.getItemCount();

    await wishlistPage.removeItem(0);

    const countAfter = await wishlistPage.getItemCount();
    expect(countAfter).toBe(countBefore - 1);
  });

  test('TC-WISH-05: Wishlist requires login', async ({ page }) => {
    // Guest session — no login
    await page.goto(url('/search?q=Blue+Jeans'));
    await page.locator('.product-title a').first().click();
    await page.locator('input[value="Add to wishlist"]').click();

    await expect(page).toHaveURL(/login/);
  });

});
