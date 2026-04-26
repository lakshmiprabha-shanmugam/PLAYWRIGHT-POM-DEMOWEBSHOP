import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { config, url } from './config/testConfig';

const testEmail = `testlogin+${Date.now()}@gmail.com`;
const testPassword = config.users.standard.password;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const registerPage = new RegisterPage(page);

  await registerPage.navigate();
  await registerPage.register({
    gender: 'Female',
    firstName: 'Test',
    lastName: 'User',
    email: testEmail,
    password: testPassword,
  });
  await context.close();
});

test.describe('4.2 Login and Logout', () => {

  test('TC-AUTH-01: Successful login with valid credentials @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login({ email: testEmail, password: testPassword });

    await expect(page).toHaveURL(url('/'));
    await expect(loginPage.accountLink).toContainText(testEmail);
  });

  test('TC-AUTH-02: Login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login({ email: testEmail, password: 'WrongPassword99' });

    await expect(loginPage.errorSummary).toBeVisible();
    await expect(loginPage.errorSummary).toContainText(
      'Login was unsuccessful. Please correct the errors and try again'
    );
    await expect(page).toHaveURL(/login/);
  });

  test('TC-AUTH-03: Login with unregistered email', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login({ email: 'unregistered@nowhere.com', password: testPassword });

    await expect(loginPage.errorSummary).toBeVisible();
    await expect(page).toHaveURL(/login/);
  });

  test('TC-AUTH-04: Login with empty fields', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login({ email: '', password: '' });

    await expect(page).toHaveURL(/login/);
    await expect(loginPage.errorSummary.or(loginPage.fieldValidationErrors)).toBeVisible();
  });

});
