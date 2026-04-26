import { Page, Locator } from '@playwright/test';
import { url } from '../tests/config/testConfig';

export class HomePage {
  readonly page: Page;
  readonly banner: Locator;
  readonly topNavMenu: Locator;
  readonly topNavLinks: Locator;
  readonly searchBox: Locator;
  readonly featuredProductsSection: Locator;
  readonly productItems: Locator;
  readonly productImages: Locator;
  readonly productNames: Locator;
  readonly productPrices: Locator;
  readonly cartLink: Locator;
  readonly cartQty: Locator;
  readonly addToCartButtons: Locator;
  readonly footerInfoSection: Locator;
  readonly footerCustomerServiceSection: Locator;
  readonly footerNewsletterSection: Locator;
  readonly categoryPageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.banner = page.locator('.slider-wrapper');
    this.topNavMenu = page.locator('.top-menu');
    this.topNavLinks = page.locator('.top-menu > li > a');
    this.searchBox = page.locator('#small-searchterms');
    this.featuredProductsSection = page.locator('.home-page-product-grid');
    this.productItems = page.locator('.home-page-product-grid .product-item');
    this.productImages = page.locator('.home-page-product-grid .product-item .picture img');
    this.productNames = page.locator('.home-page-product-grid .product-item .product-title');
    this.productPrices = page.locator('.home-page-product-grid .product-item .actual-price');
    this.cartLink = page.locator('#topcartlink');
    this.cartQty = page.locator('.cart-qty');
    this.addToCartButtons = page.locator('.home-page-product-grid input[value="Add to cart"]');
    this.footerInfoSection = page.locator('.footer .column').filter({ hasText: 'Information' });
    this.footerCustomerServiceSection = page.locator('.footer .column').filter({ hasText: 'Customer service' });
    this.footerNewsletterSection = page.locator('.newsletter-email');
    this.categoryPageTitle = page.locator('.page-title h1');
  }

  async navigate() {
    await this.page.goto(url('/'));
  }

  async getTopNavLinkNames(): Promise<string[]> {
    const texts = await this.topNavLinks.allInnerTexts();
    return texts.map(t => t.trim());
  }

  async clickTopNavLinkAt(index: number) {
    await this.topNavLinks.nth(index).click();
  }

  async addFirstProductToCart() {
    const addToCartResponse = this.page.waitForResponse(
      response => response.url().includes('/addproducttocart/') && response.status() === 200
    );
    await this.addToCartButtons.nth(1).click();
    await addToCartResponse;
  }
}
