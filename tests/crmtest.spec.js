import { test, expect } from '@playwright/test';
import { CRMRegistrationPage } from '../pages/crmRegistrationPage';
import { crmTestCredentials } from '../testdata/crmTestData';

test('to create new user account', async ({ page }) => {
  const crmPage = new CRMRegistrationPage(page);

  // Navigate to registration page
  await crmPage.navigateToRegistration();

  // Fill and submit registration form
  await crmPage.fillRegistrationForm(crmTestCredentials);
  await crmPage.submitForm();

  // Cleanup
  await crmPage.waitForNavigation(6000);
  await page.context().close();
});

