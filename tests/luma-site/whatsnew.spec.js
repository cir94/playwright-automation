// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/what-is-new.html');
});

test('at whats new page', async ({ page }) => {
  await expect(page).toHaveTitle(/What's New/);
});

test('categories properly load', async ({ page }) => {
  await expect(page.getByText(`New in women's`)).toBeVisible();
  await expect(page.getByText(`New in men's`)).toBeVisible();
});

test(`what's new promos blocks load`, async ({ page }) => {
  await expect(page.locator('.blocks-promo')).toBeVisible();
});

test(`Latest list to load`, async ({ page }) => {
  await expect(page.locator('.widget-product-grid')).toBeVisible();
});

// Testing for typical things found on page, like navbar and footer

test(`navbar to load`, async ({ page }) => {
  await expect(page.locator('.navigation')).toBeVisible();
});

test(`footer to load`, async ({ page }) => {
  await expect(page.locator('.page-footer')).toBeVisible();
});

test(`copyright loading properly`, async ({ page }) => {
  await expect(page.locator('.copyright')).toBeVisible();
});
