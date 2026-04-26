import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import * as xlsx from 'xlsx';

interface RegistrationRow {
  gender: 'Male' | 'Female';
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const workbook = xlsx.readFile('testData/registrationData.xlsx');
const sheetName = workbook.SheetNames[0];

if (!sheetName) {
  throw new Error('No sheets found in testData/registrationData.xlsx');
}

const sheet = workbook.Sheets[sheetName];

if (!sheet) {
  throw new Error(`Sheet "${sheetName}" was not found in testData/registrationData.xlsx`);
}

const testData: RegistrationRow[] = xlsx.utils.sheet_to_json(sheet);

test.describe('Registration - Excel Data Driven Tests', () => {
  test.describe.configure({ timeout: 120000 });

  for (const data of testData) {
    test(`Register user: ${data.firstName} ${data.lastName} (${data.gender})`, async ({ page }) => {
      const registerPage = new RegisterPage(page);

      // Append timestamp to keep each email unique across runs
      const uniqueEmail = data.email.replace('@', `+${Date.now()}@`);

      await registerPage.navigate();
      await registerPage.register({
        gender: data.gender,
        firstName: data.firstName,
        lastName: data.lastName,
        email: uniqueEmail,
        password: data.password,
        confirmPassword: data.confirmPassword,
      });

      await expect(page).toHaveURL(/registerresult/);
      await expect(registerPage.successMessage).toHaveText('Your registration completed');
    });
  }
});
