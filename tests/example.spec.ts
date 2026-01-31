import { test, expect } from '@playwright/test';

test('@Smoke Verify homepage title', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation Exercise/);
});
