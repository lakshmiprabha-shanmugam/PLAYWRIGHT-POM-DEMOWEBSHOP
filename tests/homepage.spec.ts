import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { url } from './config/testConfig';

test.describe('4.3 Homepage and Navigation', () => {

  test('TC-HOME-01: Homepage loads correctly @smoke', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();

    await expect(page).toHaveURL(url('/'));
    await expect(homePage.banner).toBeVisible();
    await expect(homePage.topNavMenu).toBeVisible();
    await expect(homePage.searchBox).toBeVisible();
  });

  test('TC-HOME-02: Top navigation links work', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    const linkNames = await homePage.getTopNavLinkNames();
    expect(linkNames.length).toBeGreaterThan(0);

    for (let i = 0; i < linkNames.length; i++) {
      await homePage.navigate();
      await homePage.clickTopNavLinkAt(i);
      await expect(page).not.toHaveURL(url('/'));
      await expect(homePage.categoryPageTitle).toBeVisible();
    }
  });

  test('TC-HOME-03: Featured products displayed', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();

    await expect(homePage.featuredProductsSection).toBeVisible();
    await expect(homePage.productItems.first()).toBeVisible();
    await expect(homePage.productImages.first()).toBeVisible();
    await expect(homePage.productNames.first()).toBeVisible();
    await expect(homePage.productPrices.first()).toBeVisible();
  });

  test('TC-HOME-04: Cart icon shows item count', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    await expect(homePage.cartQty).toHaveText('(0)');

    await homePage.addFirstProductToCart();

    await expect(homePage.cartQty).not.toHaveText('(0)');
    await expect(homePage.cartLink).toBeVisible();
  });

  test('TC-HOME-05: Footer links present', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    await homePage.footerInfoSection.scrollIntoViewIfNeeded();

    await expect(homePage.footerInfoSection).toBeVisible();
    await expect(homePage.footerCustomerServiceSection).toBeVisible();
    await expect(homePage.footerNewsletterSection).toBeVisible();
  });

});
