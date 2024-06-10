// @ts-check
import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
});

test('has title', async ({ page }) => {
  await page.goto('https://uitestingplayground.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playground/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://uitestingplayground.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Click' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('button', { name: 'Button That Ignores DOM Click Event' })
  ).toBeVisible();
});
