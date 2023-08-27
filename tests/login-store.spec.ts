import path from 'path';
import { test, expect, Page } from '@playwright/test';

import * as dotenv from 'dotenv';
const env_path = path.join(process.cwd(), '../' , `.env${process.env.ENV === 'LOCAL' ? '.local' : ''}`);
console.log(`env_path=${env_path}`);
dotenv.config({path: env_path});
const STORE_DASHBOARD_URL = process.env.STORE_DASHBOARD_URL || 'http://localhost:3000';
const USR = process.env.USR || 'local2@sicpama.com';
const PASS = process.env.PASS || 'testing1234';
console.log(`STORE_DASHBOARD_URL=${STORE_DASHBOARD_URL}`);
console.log(`USR=${USR}`);
console.log(`PASS=${PASS}`);

test.use({ viewport: { width: 1280, height: 720 } });

test.describe('Store dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${STORE_DASHBOARD_URL}/login/`);
    await expect(page).toHaveTitle(/SICPAMA Store Dashboard/);
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill(USR);
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill(PASS);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Table status')).toBeVisible();
    await expect(page.getByTestId('tableStatus_table-status-title')).toHaveText("Table status");
  });

  test.afterEach(async ({ page }) => {
    page.close();
  });

  test('Check tabs', async ({ page }) => {
    const tabs = page.getByRole('tab');
    expect(await tabs.count()).toBe(3);
    await expect(tabs.nth(0)).toHaveText('Table');
    await expect(tabs.nth(1)).toHaveText('In progress');
    await expect(tabs.nth(2)).toHaveText('Serving complete');
  });
  
  test('clear table', async ({ page }) => {
    await expect(page.getByTestId('TableList-table-card-11')).toBeVisible();
    await page.getByTestId('TableList-table-card-11').click();
    await page.getByTestId('OrderDetailModal_clear-table-button-div').click();
    await page.getByRole('button', { name: 'OK' }).click();
  });
});
