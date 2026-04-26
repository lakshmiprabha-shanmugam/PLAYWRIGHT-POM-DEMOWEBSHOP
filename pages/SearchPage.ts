import { Page, Locator } from '@playwright/test';
import { url } from '../tests/config/testConfig';

export class SearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchResults: Locator;
  readonly noResultsMessage: Locator;
  readonly sortDropdown: Locator;
  readonly productPrices: Locator;
  readonly productNames: Locator;
  readonly pager: Locator;
  readonly warningMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('#small-searchterms');
    this.searchButton = page.locator('.search-box-button');
    this.searchResults = page.locator('.product-grid .product-item');
    this.noResultsMessage = page.getByText('No products were found that matched your criteria');
    this.sortDropdown = page.locator('#products-orderby');
    this.productPrices = page.locator('.actual-price');
    this.productNames = page.locator('.product-title a');
    this.pager = page.locator('.pager');
    this.warningMessage = page.locator('.warning');
  }

  async navigate() {
    await this.page.goto(url('/search'));
  }

  async search(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchButton.click();
  }

  async getProductCount(): Promise<number> {
    return await this.searchResults.count();
  }

  async getProductPricesAsNumbers(): Promise<number[]> {
    const priceTexts = await this.productPrices.allInnerTexts();
    return priceTexts.map(t => parseFloat(t.replace(/[^0-9.]/g, '')));
  }

  async sortBy(optionLabel: string) {
    const response = this.page.waitForResponse(resp =>
      resp.url().includes('/search') && resp.status() === 200
    );
    await this.sortDropdown.selectOption({ label: optionLabel });
    await response;
    await this.page.waitForLoadState('networkidle');
    await this.searchResults.first().waitFor({ state: 'visible' });
  }

  async navigateToPage(pageNumber: number) {
    await this.pager.getByRole('link', { name: String(pageNumber) }).click();
  }
}
