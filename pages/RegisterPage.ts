import { Page, Locator } from '@playwright/test';
import { url } from '../tests/config/testConfig';

export class RegisterPage {
  readonly page: Page;
  readonly genderFemale: Locator;
  readonly genderMale: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;
  readonly successMessage: Locator;
  readonly errorSummary: Locator;
  readonly validationErrors: Locator;

  constructor(page: Page) {
    this.page = page;
    this.genderFemale = page.getByRole('radio', { name: 'Female' });
    this.genderMale = page.getByRole('radio', { name: 'Male', exact: true });
    this.firstNameInput = page.getByRole('textbox', { name: 'First name:' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name:' });
    this.emailInput = page.getByRole('textbox', { name: 'Email:' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password:', exact: true });
    this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm password:' });
    this.registerButton = page.getByRole('button', { name: 'Register' });
    this.successMessage = page.locator('.result');
    this.errorSummary = page.locator('.validation-summary-errors');
    this.validationErrors = page.locator('.field-validation-error');
  }

  async navigate() {
    await this.page.goto(url('/register'));
  }

  async register(data: {
    gender?: 'Male' | 'Female';
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }) {
    if (data.gender === 'Female') {
      await this.genderFemale.click();
    } else if (data.gender === 'Male') {
      await this.genderMale.click();
    }
    if (data.firstName !== undefined) await this.firstNameInput.fill(data.firstName);
    if (data.lastName !== undefined) await this.lastNameInput.fill(data.lastName);
    if (data.email !== undefined) await this.emailInput.fill(data.email);
    if (data.password !== undefined) await this.passwordInput.fill(data.password);
    const confirmPwd = data.confirmPassword ?? data.password;
    if (confirmPwd !== undefined) await this.confirmPasswordInput.fill(confirmPwd);
    await this.registerButton.click();
  }
}
