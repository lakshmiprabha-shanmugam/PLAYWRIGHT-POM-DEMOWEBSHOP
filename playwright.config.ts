import { defineConfig, devices, type ReporterDescription } from '@playwright/test';

const reporters: ReporterDescription[] = [
  ...(process.env.JENKINS_URL ? [['./scripts/ascii-reporter.cjs'] as ReporterDescription] : []),
  ['html',  { open: 'never' }],
  ['junit', { outputFile: 'results.xml' }],
  ['allure-playwright', { outputFolder: 'allure-results' }],
];

if (process.env.GITHUB_ACTIONS) {
  reporters.push(['github']);
}

export default defineConfig({
  testDir       : './tests',
  fullyParallel : true,
  forbidOnly    : !!process.env.CI,      // Fail if test.only left in on CI
  retries       : process.env.CI ? 1 : 0,
  workers       : process.env.CI ? 4 : 2,

  reporter: reporters,

  use: {
    baseURL        : process.env.BASE_URL || 'https://demowebshop.tricentis.com/',
    trace          : 'on-first-retry',
    screenshot     : 'only-on-failure',
    video          : 'retain-on-failure',
    headless       : true,
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'chrome',   use: { ...devices['Desktop Chrome'], channel: 'chrome' } },
    // { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
  ],
});
