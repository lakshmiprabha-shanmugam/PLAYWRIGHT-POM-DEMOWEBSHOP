import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { parse } from 'csv-parse/sync';
import * as fs from 'fs';
import * as path from 'path';

interface RegistrationRow {
  scenario: string;
  gender: 'Male' | 'Female';
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  expectedResult: 'success' | 'failure';
  expectedError: string;
}

const csvPath = path.join(__dirname, '..', 'registrationData.csv');
const testData: RegistrationRow[] = parse(fs.readFileSync(csvPath, 'utf-8'), {
  columns: true,
  skip_empty_lines: true,
  trim: true,
});

test.describe('Registration - CSV Data Driven Tests', () => {
  test.describe.configure({ timeout: 120000 });

  for (const data of testData) {
    test(data.scenario, async ({ page }) => {
      const registerPage = new RegisterPage(page);

      // Success cases use the email field as a prefix to guarantee uniqueness.
      // Failure cases use the email value as-is (including empty or invalid values).
      const email =
        data.expectedResult === 'success'
          ? `${data.email}+${Date.now()}@gmail.com`
          : data.email;

      await registerPage.navigate();
      await registerPage.register({
        gender: data.gender,
        firstName: data.firstName,
        lastName: data.lastName,
        email,
        password: data.password,
      });

      if (data.expectedResult === 'success') {
        await expect(page).toHaveURL(/registerresult/);
        await expect(registerPage.successMessage).toHaveText('Your registration completed');
      } else {
        const errors = page.locator('.field-validation-error, .validation-summary-errors');
        await expect(errors.first()).toBeVisible();
        if (data.expectedError) {
          await expect(page.locator('body')).toContainText(data.expectedError);
        }
      }
    });
  }
});
