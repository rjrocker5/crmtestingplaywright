import { test } from '@playwright/test';
import { CRMRegistrationPage } from '../pages/crmRegistrationPage';
import { crmTestCredentials } from '../testdata/crmTestData';
import { waitForTimeout } from '../utils/waitUtils';
import { logSection, logInfo, logPass, logExecutionTime } from '../utils/loggingUtils';

test('to create new user account', async ({ page }) => {
  const startTime = Date.now();
  logSection('CRM REGISTRATION TEST');

  const crmPage = new CRMRegistrationPage(page);

  try {
    // Navigate to registration page
    logInfo('Navigating to CRM registration page');
    await crmPage.navigateToRegistration();
    logPass('Registration page loaded');

    // Fill and submit registration form
    logInfo('Filling registration form');
    await crmPage.fillRegistrationForm(crmTestCredentials);
    logPass('Form filled successfully');

    logInfo('Submitting registration form');
    await crmPage.submitForm();
    logPass('Form submitted');

    // Wait for form submission to complete
    logInfo('Waiting for form processing');
    await waitForTimeout(6000);
    logPass('Registration completed');

  } catch (error) {
    logInfo(`Test failed with error: ${error.message}`);
    throw error;
  } finally {
    await page.context().close();
    logExecutionTime('CRM Registration Test', startTime);
  }
});

