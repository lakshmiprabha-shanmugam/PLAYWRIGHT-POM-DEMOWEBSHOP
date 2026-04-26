import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import testData from '../registrationData.json';

test.describe('Registration - Data Driven Tests', () => {
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
        gender: data.gender as 'Male' | 'Female',
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
