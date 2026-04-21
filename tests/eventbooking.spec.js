import { test, expect } from '@playwright/test';
import { EventBookingPage } from '../pages/eventbookingPage';

const TEST_EMAIL = 'israrhussainraza8@gmail.com';
const TEST_PASSWORD = 'Apple@123';
const FULL_NAME = 'Israr Hussain';
const PHONE_NUMBER = '8092845989';

test('to create new user account', async ({ page }) => {
  const eventBookingPage = new EventBookingPage(page);
  
  // Navigate and login
  await eventBookingPage.navigateToLogin();
  await eventBookingPage.login(TEST_EMAIL, TEST_PASSWORD);
  
  // Select event and fill booking form
  await eventBookingPage.selectEvent('Dilli Diwali Mela');
  await eventBookingPage.fillBookingForm(FULL_NAME, TEST_EMAIL, PHONE_NUMBER);
  
  // Confirm booking and view details
  await eventBookingPage.confirmBooking();
  await eventBookingPage.viewMyBookings();
  await eventBookingPage.viewBookingDetails();
  
  // Cleanup
  await eventBookingPage.logout();
  await eventBookingPage.waitForNavigation(6000);
  await page.context().close();
});