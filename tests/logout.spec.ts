import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LogoutPage } from '../pages/LogoutPage';
import { RegisterPage } from '../pages/RegisterPage';
import { config, url } from './config/testConfig';

const testEmail = `testlogout+${Date.now()}@gmail.com`;
const testPassword = config.users.standard.password;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const registerPage = new RegisterPage(page);

  await registerPage.navigate();
  await registerPage.register({
    gender: 'Female',
    firstName: 'Logout',
    lastName: 'Test',
    email: testEmail,
    password: testPassword,
  });
  await context.close();
});

test.describe('4.2 Login and Logout', () => {

  test('TC-AUTH-05: Successful logout @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const logoutPage = new LogoutPage(page);

    await loginPage.navigate();
    await loginPage.login({ email: testEmail, password: testPassword });
    await expect(page).toHaveURL(url('/'));

    await logoutPage.logout();

    await expect(page).toHaveURL(url('/'));
    await expect(logoutPage.loginLink).toBeVisible();
  });

  test('TC-AUTH-06: Access protected page while logged out', async ({ page }) => {
    await page.goto(url('/customer/info'));

    await expect(page).toHaveURL(/login/);
  });

});
