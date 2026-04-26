import { test, expect } from '@playwright/test';
import { CategoryNavigationPage } from '../pages/CategoryNavigationPage';
import { url } from './config/testConfig';

test.describe('Category Navigation - Left Panel Validation', () => {
  test.describe.configure({ timeout: 60000 });

  test('should validate left nav category count matches header menu', async ({ page }) => {
    const categoryPage = new CategoryNavigationPage(page);

    await page.goto(url('/'));

    const leftNavNames = await categoryPage.getLeftNavCategoryNames();
    const headerMenuNames = await categoryPage.getHeaderMenuCategoryNames();

    expect(leftNavNames.length).toBeGreaterThan(0);
    expect(leftNavNames.length).toBe(headerMenuNames.length);
  });

  test('should match each left nav category name with header menu', async ({ page }) => {
    const categoryPage = new CategoryNavigationPage(page);

    await page.goto(url('/'));

    const leftNavNames = await categoryPage.getLeftNavCategoryNames();
    const headerMenuNames = await categoryPage.getHeaderMenuCategoryNames();

    const headerMenuNamesLower = headerMenuNames.map(h => h.toLowerCase());
    for (const name of leftNavNames) {
      expect(headerMenuNamesLower).toContain(name.toLowerCase());
    }
  });

  test('should navigate to each category page and display the correct title', async ({ page }) => {
    test.setTimeout(150000);

    const categoryPage = new CategoryNavigationPage(page);

    await page.goto(url('/'));
    await categoryPage.leftNavLinks.first().waitFor({ state: 'visible' });

    const categoryNames = await categoryPage.getLeftNavCategoryNames();

    for (let i = 0; i < categoryNames.length; i++) {
      if (i > 0) {
        await page.goBack();
        await categoryPage.leftNavLinks.first().waitFor({ state: 'visible' });
      }
      await categoryPage.clickLeftNavCategoryByIndex(i);
      const heading = await categoryPage.getPageHeading();
      expect(heading).toBe(categoryNames[i]);
    }
  });
});
