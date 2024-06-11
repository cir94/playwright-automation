// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
});

test('at homepage', async ({ page }) => {
  await expect(page).toHaveTitle(/Home Page/);
});

test('has navbar', async ({ page }) => {
  const navbar = page.getByRole('menu');
  await expect(navbar).toHaveCount(6);
});
