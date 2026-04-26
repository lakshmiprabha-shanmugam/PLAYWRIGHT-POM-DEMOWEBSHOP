import { Page, Locator } from '@playwright/test';
import { url } from '../tests/config/testConfig';

export class CategoryNavigationPage {
  readonly page: Page;
  readonly leftNavLinks: Locator;
  readonly headerMenuLinks: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.leftNavLinks = page.locator('.block-category-navigation .listbox ul li a');
    this.headerMenuLinks = page.locator('.top-menu > li > a');
    this.pageTitle = page.locator('.page-title h1');
  }

  async navigate() {
    await this.page.goto(url('/books'));
  }

  async getLeftNavCategoryNames(): Promise<string[]> {
    const texts = await this.leftNavLinks.allInnerTexts();
    return texts.map(t => t.trim());
  }

  async getHeaderMenuCategoryNames(): Promise<string[]> {
    const texts = await this.headerMenuLinks.allInnerTexts();
    return texts.map(t => t.trim());
  }

  async getPageHeading(): Promise<string> {
    return (await this.pageTitle.innerText()).trim();
  }

  async clickLeftNavCategoryByIndex(index: number) {
    await this.leftNavLinks.nth(index).click();
  }
}
