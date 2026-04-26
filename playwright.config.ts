import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir       : './tests',
  fullyParallel : true,
  forbidOnly    : !!process.env.CI,      // Fail if test.only left in on CI
  retries       : process.env.CI ? 1 : 0,
  workers       : process.env.CI ? 4 : 2,

  reporter: [
    ['html',  { open: 'never' }],
    ['junit', { outputFile: 'results.xml' }],   // Jenkins test trend charts
    ['github'],                                  // PR annotations in GitHub
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],

  use: {
    baseURL        : process.env.BASE_URL || 'https://demowebshop.tricentis.com/',
    trace          : 'on-first-retry',
    screenshot     : 'only-on-failure',
    video          : 'retain-on-failure',
    headless       : true,
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // { name: 'chrome',   use: { ...devices['Desktop Chrome'], channel: 'chrome' } },
    // { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
  ],
});
