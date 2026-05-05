import { test, expect } from '@playwright/test';
import { EventBookingPage } from '../pages/eventbookingPage';
import { eventBookingTestCredentials } from '../testdata/eventBookingTestData';
import { waitForTimeout } from '../utils/waitUtils';

test('to create new user account', async ({ page }) => {
  const eventBookingPage = new EventBookingPage(page);
  
  // Navigate and login
  await eventBookingPage.navigateToLogin();
  await eventBookingPage.login(eventBookingTestCredentials.email, eventBookingTestCredentials.password);
  
  // Select event and fill booking form
  await eventBookingPage.selectEvent('Dilli Diwali Mela');
  await eventBookingPage.fillBookingForm(eventBookingTestCredentials.fullName, eventBookingTestCredentials.email, eventBookingTestCredentials.phoneNumber);
  
  // Confirm booking and view details
  await eventBookingPage.confirmBooking();
  await eventBookingPage.viewMyBookings();
  await eventBookingPage.viewBookingDetails();
  
  // Cleanup
  await eventBookingPage.logout();
  await waitForTimeout(6000);
  await page.context().close();
});