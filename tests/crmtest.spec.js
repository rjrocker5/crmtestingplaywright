import { test, expect } from '@playwright/test';

test('to create new user account', async ({ page }) => {
 await page.goto('https://rahulshettyacademy.com/client/#/auth/register');
 await page.locator('//input[@id="firstName"]').fill('Israr');
 await page.getByPlaceholder('Last Name').fill('Hussain');
 await page.getByPlaceholder('email@example.com').fill('iskkd1r@example.com');
 await page.getByPlaceholder('enter your number').fill('7992323760');
 await page.locator('//select[@formcontrolname="occupation"]').selectOption('Engineer');
 await page.locator('//input[@value="Male"]').check();
 await page.locator('//input[@id="userPassword"]').fill('Aaa@12345');
 await page.locator('//input[@id="confirmPassword"]').fill('Aaa@12345');
 await page.locator('//input[@formcontrolname="required"]').check();
 await page.locator('//input[@type="submit"]').click();
  await page.waitForTimeout(6000);
    await page.context().close();
});

