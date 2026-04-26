import { Page, Locator } from '@playwright/test';
import { url } from '../tests/config/testConfig';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorSummary: Locator;
  readonly fieldValidationErrors: Locator;
  readonly accountLink: Locator;
  readonly forgotPasswordLink: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email:' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
    this.loginButton = page.getByRole('button', { name: 'Log in' });
    this.errorSummary = page.locator('.validation-summary-errors');
    this.fieldValidationErrors = page.locator('.field-validation-error');
    this.accountLink = page.locator('a.account').first();
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot password?' });
    this.registerButton = page.locator('.register-button');
  }

  async navigate() {
    await this.page.goto(url('/login'));
  }

  async login(data: { email: string; password: string }) {
    await this.emailInput.fill(data.email);
    await this.passwordInput.fill(data.password);
    await this.loginButton.click();
  }

  async navigateToForgotPassword() {
    await this.forgotPasswordLink.click();
  }

  async navigateToRegisterFromLogin() {
    await this.registerButton.click();
  }
}
