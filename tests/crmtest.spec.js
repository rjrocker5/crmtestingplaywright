import { test, expect } from '@playwright/test';

test('to create new user account', async ({ page }) => {
 await page.goto('https://rahulshettyacademy.com/client/#/auth/register');

  await page.waitForTimeout(6000);
    await page.context().close();
});

