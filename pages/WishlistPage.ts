import { Page, Locator } from '@playwright/test';
import { url } from '../tests/config/testConfig';

export class WishlistPage {
  readonly page: Page;
  readonly wishlistHeaderLink: Locator;
  readonly wishlistQty: Locator;
  readonly wishlistItems: Locator;
  readonly productNames: Locator;
  readonly unitPrices: Locator;
  readonly removeCheckboxes: Locator;
  readonly addToCartCheckboxes: Locator;
  readonly updateWishlistButton: Locator;
  readonly addToCartButton: Locator;
  readonly successNotification: Locator;
  readonly emptyWishlistMessage: Locator;
  readonly cartQty: Locator;

  constructor(page: Page) {
    this.page = page;
    this.wishlistHeaderLink = page.locator('a.ico-wishlist').first();
    this.wishlistQty = page.locator('.wishlist-qty');
    this.wishlistItems = page.locator('.wishlist-content table tbody tr');
    this.productNames = page.locator('.wishlist-content table tbody tr td:nth-child(4) a');
    this.unitPrices = page.locator('.wishlist-content table tbody tr td:nth-child(5)');
    this.removeCheckboxes = page.locator('.wishlist-content input[name="removefromcart"]');
    this.addToCartCheckboxes = page.locator('.wishlist-content input[name="addtocart"]');
    this.updateWishlistButton = page.locator('.wishlist-content input[value="Update wishlist"]');
    this.addToCartButton = page.locator('.wishlist-content input[value="Add to cart"]');
    this.successNotification = page.locator('.bar-notification.success');
    this.emptyWishlistMessage = page.locator('.no-data');
    this.cartQty = page.locator('.cart-qty');
  }

  async navigate() {
    await this.page.goto(url('/wishlist'));
  }

  async removeItem(itemIndex: number) {
    await this.removeCheckboxes.nth(itemIndex).check();
    await this.updateWishlistButton.click();
  }

  async removeAllItems() {
    const count = await this.removeCheckboxes.count();
    for (let i = 0; i < count; i++) {
      await this.removeCheckboxes.nth(i).check();
    }
    if (count > 0) {
      await this.updateWishlistButton.click();
    }
  }

  async addItemToCartFromWishlist(itemIndex: number) {
    await this.addToCartCheckboxes.nth(itemIndex).check();
    await this.addToCartButton.click();
  }

  async getItemCount(): Promise<number> {
    return await this.wishlistItems.count();
  }
}
