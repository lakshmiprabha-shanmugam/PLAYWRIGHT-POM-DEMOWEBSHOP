import { test, expect, Page } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { url } from './config/testConfig';

// Searches for a product and adds the first result to cart
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

test.describe('4.5 Shopping Cart', () => {

  test('TC-CART-01: Add single item to cart @smoke', async ({ page }) => {
    const cartPage = new CartPage(page);

    await addProductToCart(page, 'Blue Jeans');

    await expect(cartPage.successNotification).toBeVisible();
    await expect(cartPage.cartQty).not.toHaveText('(0)');
  });

  test('TC-CART-02: Add multiple different items', async ({ page }) => {
    const cartPage = new CartPage(page);

    await addProductToCart(page, 'Blue Jeans');
    await addProductToCart(page, 'laptop');

    await cartPage.navigate();

    const itemCount = await cartPage.getItemCount();
    expect(itemCount).toBe(2);
    await expect(cartPage.cartQty).toContainText('2');
  });

  test('TC-CART-03: Update item quantity in cart', async ({ page }) => {
    const cartPage = new CartPage(page);

    await addProductToCart(page, 'Blue Jeans');
    await cartPage.navigate();

    await cartPage.updateQuantity(0, 3);

    await expect(cartPage.qtyInputs.nth(0)).toHaveValue('3');

    const unitPrices = await cartPage.getPricesAsNumbers(cartPage.unitPrices);
    const subtotals = await cartPage.getPricesAsNumbers(cartPage.itemSubtotals);
    expect(subtotals[0]).toBeCloseTo(unitPrices[0] * 3, 1);
  });

  test('TC-CART-04: Remove item from cart', async ({ page }) => {
    const cartPage = new CartPage(page);

    await addProductToCart(page, 'Blue Jeans');
    await cartPage.navigate();

    await cartPage.removeItem(0);

    await expect(
      cartPage.emptyCartMessage.or(cartPage.cartItems.first())
    ).toBeVisible();
    expect(await cartPage.getItemCount()).toBe(0);
  });

  test('TC-CART-05: Cart persists after page refresh', async ({ page }) => {
    const cartPage = new CartPage(page);

    await addProductToCart(page, 'Blue Jeans');
    await cartPage.navigate();

    await page.reload();

    const itemCount = await cartPage.getItemCount();
    expect(itemCount).toBeGreaterThan(0);
    await expect(cartPage.productNames.first()).toBeVisible();
  });

  test('TC-CART-06: Empty cart message', async ({ page }) => {
    const cartPage = new CartPage(page);

    await addProductToCart(page, 'Blue Jeans');
    await cartPage.navigate();

    await cartPage.removeAllItems();

    await expect(cartPage.emptyCartMessage).toBeVisible();
    await expect(cartPage.emptyCartMessage).toContainText('Your Shopping Cart is empty');
  });

  test('TC-CART-07: Cart total calculation', async ({ page }) => {
    const cartPage = new CartPage(page);

    await addProductToCart(page, 'Blue Jeans');
    await cartPage.navigate();

    const unitPrices = await cartPage.getPricesAsNumbers(cartPage.unitPrices);
    const quantities = await cartPage.getQuantities();
    const itemSubtotals = await cartPage.getPricesAsNumbers(cartPage.itemSubtotals);

    // Each item's subtotal must equal unit price × quantity
    for (let i = 0; i < unitPrices.length; i++) {
      expect(itemSubtotals[i]).toBeCloseTo(unitPrices[i] * quantities[i], 1);
    }

    // Order subtotal must equal sum of all item subtotals
    const expectedTotal = itemSubtotals.reduce((sum, s) => sum + s, 0);
    const displayedSubtotalText = await cartPage.orderSubtotal.innerText();
    const displayedSubtotal = parseFloat(displayedSubtotalText.replace(/[^0-9.]/g, ''));
    expect(displayedSubtotal).toBeCloseTo(expectedTotal, 1);
  });

  test('TC-CART-08: Continue shopping from cart', async ({ page }) => {
    const cartPage = new CartPage(page);

    await addProductToCart(page, 'Blue Jeans');
    await cartPage.navigate();

    await cartPage.continueShoppingButton.click();

    await expect(page).not.toHaveURL(/\/cart/);
  });

});
