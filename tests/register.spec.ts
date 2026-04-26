import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('4.1 User Registration', () => {

  test('TC-REG-01: Successful registration with valid data @smoke', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const uniqueEmail = `lakshmishan+${Date.now()}@gmail.com`;

    await registerPage.navigate();
    await registerPage.register({
      gender: 'Female',
      firstName: 'Lakshmi',
      lastName: 'Shan',
      email: uniqueEmail,
      password: 'test1234',
    });

    await expect(page).toHaveURL(/registerresult/);
    await expect(registerPage.successMessage).toHaveText('Your registration completed');
  });

  test('TC-REG-02: Registration with existing email', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const existingEmail = `existing+${Date.now()}@test.com`;

    // First registration — creates the account
    await registerPage.navigate();
    await registerPage.register({
      gender: 'Female',
      firstName: 'Test',
      lastName: 'User',
      email: existingEmail,
      password: 'test1234',
    });
    await expect(registerPage.successMessage).toHaveText('Your registration completed');

    // Second registration with the same email — should fail
    await registerPage.navigate();
    await registerPage.register({
      gender: 'Female',
      firstName: 'Test',
      lastName: 'User',
      email: existingEmail,
      password: 'test1234',
    });

    await expect(registerPage.errorSummary).toContainText('The specified email already exists');
  });

  test('TC-REG-03: Registration with empty required fields', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.navigate();
    await registerPage.register({});

    await expect(registerPage.validationErrors.first()).toBeVisible();
  });

  test('TC-REG-04: Registration with mismatched passwords', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.navigate();
    await registerPage.register({
      gender: 'Female',
      firstName: 'Test',
      lastName: 'User',
      email: `mismatch+${Date.now()}@test.com`,
      password: 'test1234',
      confirmPassword: 'different5678',
    });

    await expect(registerPage.validationErrors).toContainText('do not match');
  });

  test('TC-REG-05: Registration with invalid email format', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.navigate();
    await registerPage.register({
      gender: 'Female',
      firstName: 'Test',
      lastName: 'User',
      email: 'notanemail',
      password: 'test1234',
    });

    await expect(registerPage.validationErrors).toContainText('Wrong email');
  });

  test('TC-REG-06: Registration with password too short', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.navigate();
    await registerPage.register({
      gender: 'Female',
      firstName: 'Test',
      lastName: 'User',
      email: `shortpwd+${Date.now()}@test.com`,
      password: 'abc',
    });

    await expect(registerPage.validationErrors).toContainText('least');
  });

});
