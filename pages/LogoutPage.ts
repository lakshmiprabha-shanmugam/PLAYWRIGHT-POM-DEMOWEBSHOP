import { Page, Locator } from '@playwright/test';

export class LogoutPage {
  readonly page: Page;
  readonly logoutLink: Locator;
  readonly accountLink: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutLink = page.locator('a.ico-logout');
    this.accountLink = page.locator('a.account').first();
    this.loginLink = page.locator('a.ico-login');
  }

  async logout() {
    await this.logoutLink.click();
  }
}
