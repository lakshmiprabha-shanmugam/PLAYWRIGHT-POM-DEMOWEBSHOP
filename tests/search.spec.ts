import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test.describe('4.4 Product Search', () => {

  test('TC-SRCH-01: Search with valid keyword @smoke', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.navigate();
    await searchPage.search('Blue Jeans');

    await expect(page).toHaveURL(/search/);
    await expect(searchPage.searchResults.first()).toBeVisible();
    await expect(searchPage.productNames.first()).toContainText(/blue jeans/i);
  });

  test('TC-SRCH-02: Search with no results', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.navigate();
    await searchPage.search('xyznotaproduct123');

    await expect(searchPage.noResultsMessage).toBeVisible();
    await expect(searchPage.noResultsMessage).toContainText(
      'No products were found that matched your criteria'
    );
  });

  test('TC-SRCH-03: Search with empty input', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.navigate();
    await searchPage.search('');

    await expect(page).toHaveURL(/search/);
    await expect(page.getByRole('heading', { name: 'Search' })).toBeVisible();
  });

  test('TC-SRCH-04: Search is case-insensitive', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.navigate();
    await searchPage.search('blue jeans');
    const lowerCaseCount = await searchPage.getProductCount();

    await searchPage.navigate();
    await searchPage.search('BLUE JEANS');
    const upperCaseCount = await searchPage.getProductCount();

    expect(lowerCaseCount).toBeGreaterThan(0);
    expect(upperCaseCount).toBe(lowerCaseCount);
  });

  test('TC-SRCH-05: Search result sorting', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.navigate();
    await searchPage.search('computer');

    await expect(searchPage.searchResults.first()).toBeVisible();
    await searchPage.sortBy('Price: Low to High');

    const prices = await searchPage.getProductPricesAsNumbers();
    expect(prices.length).toBeGreaterThan(1);

    for (let i = 1; i < prices.length; i++) {
      expect(prices[i]).toBeGreaterThanOrEqual(prices[i - 1]);
    }
  });

  test('TC-SRCH-06: Search result pagination', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.navigate();
    await searchPage.search('a');

    const firstPageProducts = await searchPage.getProductCount();
    expect(firstPageProducts).toBeGreaterThanOrEqual(0);

    if (await searchPage.pager.getByRole('link', { name: '2' }).isVisible()) {
      await searchPage.navigateToPage(2);

      await expect(page).toHaveURL(/pagenumber=2/i);
      await expect(searchPage.searchResults.first()).toBeVisible();
    } else {
      await expect(searchPage.pager).toBeHidden();
    }
  });

});
