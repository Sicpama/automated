import { test, expect } from '@playwright/test';

test('test login to store dashboard', async ({ page }) => {
  await page.goto('https://store-dashboard-feature.sicpama.com/login/');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/SICPAMA Store Dashboard/);

  // Login
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('feature1@sicpama.com');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('testing1234');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Table status')).toBeVisible();
});
