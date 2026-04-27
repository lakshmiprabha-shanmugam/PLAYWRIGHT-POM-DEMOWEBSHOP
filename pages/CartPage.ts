import { Page, Locator } from '@playwright/test';
import { url } from '../tests/config/testConfig';
//test comment
export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly cartQty: Locator;
  readonly qtyInputs: Locator;
  readonly updateCartButton: Locator;
  readonly removeCheckboxes: Locator;
  readonly orderSubtotal: Locator;
  readonly itemSubtotals: Locator;
  readonly unitPrices: Locator;
  readonly productNames: Locator;
  readonly emptyCartMessage: Locator;
  readonly continueShoppingButton: Locator;
  readonly successNotification: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart tbody tr');
    this.cartQty = page.locator('.cart-qty');
    this.qtyInputs = page.locator('.qty-input');
    this.updateCartButton = page.locator('input[name="updatecart"]');
    this.removeCheckboxes = page.locator('input[name="removefromcart"]');
    this.orderSubtotal = page.locator('.cart-total-right span').first();
    this.itemSubtotals = page.locator('td.subtotal .product-subtotal');
    this.unitPrices = page.locator('td.unit-price .product-unit-price');
    this.productNames = page.locator('td.product a.product-name');
    this.emptyCartMessage = page.locator('.order-summary-content:has-text("Your Shopping Cart is empty!")');
    this.continueShoppingButton = page.locator('input[name="continueshopping"]');
    this.successNotification = page.locator('.bar-notification.success');
  }

  async navigate() {
    await this.page.goto(url('/cart'));
  }

  async updateQuantity(itemIndex: number, qty: number) {
    await this.qtyInputs.nth(itemIndex).fill(String(qty));
    await this.updateCartButton.click();
  }

  async removeItem(itemIndex: number) {
    await this.removeCheckboxes.nth(itemIndex).check();
    await this.updateCartButton.click();
  }

  async removeAllItems() {
    const count = await this.removeCheckboxes.count();
    for (let i = 0; i < count; i++) {
      await this.removeCheckboxes.nth(i).check();
    }
    await this.updateCartButton.click();
  }

  async getItemCount(): Promise<number> {
    return await this.cartItems.count();
  }

  async getPricesAsNumbers(locator: Locator): Promise<number[]> {
    const texts = await locator.allInnerTexts();
    return texts.map(t => parseFloat(t.replace(/[^0-9.]/g, '')));
  }

  async getQuantities(): Promise<number[]> {
    const values = await this.qtyInputs.evaluateAll(
      (inputs) => inputs.map(el => parseFloat((el as HTMLInputElement).value))
    );
    return values;
  }
}
