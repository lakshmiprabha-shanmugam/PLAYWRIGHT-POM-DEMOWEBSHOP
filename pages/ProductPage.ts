import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addToCartButtons: Locator;
  readonly addToWishlistButton: Locator;
  readonly successNotification: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButtons = page.locator('.product-essential input[value="Add to cart"]');
    this.addToWishlistButton = page.locator('input[value="Add to wishlist"]');
    this.successNotification = page.locator('.bar-notification.success');
  }

  async addToCart() {
    const addToCartButton = this.addToCartButtons.first();
    await addToCartButton.waitFor({ state: 'visible' });
    const addToCartResponse = this.page.waitForResponse(
      resp => resp.url().includes('/addproducttocart/') && resp.status() === 200
    );
    await addToCartButton.click();
    await addToCartResponse;
  }

  async addToWishlist() {
    await this.addToWishlistButton.waitFor({ state: 'visible' });
    const addToWishlistResponse = this.page.waitForResponse(
      resp => resp.url().includes('/addproducttocart/') && resp.status() === 200
    );
    await this.addToWishlistButton.click();
    await addToWishlistResponse;
  }
}
