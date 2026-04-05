import { test, expect } from '@playwright/test';

test('to create new user account', async ({ page }) => {
 
 await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
 await page.locator("//h4[text()='Brocolli - 1 Kg']/parent::div/div[@class=\"product-action\"]/button").click();
 await page.locator("//h4[text()='Cucumber - 1 Kg']/parent::div/div[@class=\"product-action\"]/button").click();
await page.locator("//h4[text()='Beetroot - 1 Kg']/parent::div/div[@class=\"product-action\"]/button").click();
await page.locator("//h4[text()='Carrot - 1 Kg']/parent::div/div[@class=\"product-action\"]/button").click();
await page.locator("//h4[text()='Beans - 1 Kg']/parent::div/div[@class=\"product-action\"]/button").click();
await page.locator("//h4[text()='Tomato - 1 Kg']/parent::div/div[@class=\"product-action\"]/button").click();
 await page.locator('//a[@class="cart-icon"]').click();
 await page.locator('//button[text()="PROCEED TO CHECKOUT"]').click();  
 await page.locator('//button[text()="Place Order"]').click(); 
 await page.locator('//select[@style="width: 200px;"]').selectOption('India');
 await page.locator('//input[@type="checkbox"]').check();
 await page.locator('//button[text()="Proceed"]').click();
  await page.waitForTimeout(6000);
});