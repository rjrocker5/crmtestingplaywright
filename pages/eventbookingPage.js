import { EVENT_BOOKING_LOCATORS } from '../locators/eventbookingPageLocators';

export class EventBookingPage {
  constructor(page) {
    this.page = page;
    this.locators = EVENT_BOOKING_LOCATORS;
  }

  async navigateToLogin() {
    await this.page.goto('https://eventhub.rahulshettyacademy.com/login');
  }

  async login(email, password) {
    await this.page.locator(this.locators.emailInput).fill(email);
    await this.page.locator(this.locators.passwordInput).fill(password);
    await this.page.locator(this.locators.submitButton).click();
  }

  async selectEvent(eventName) {
    await this.page.getByRole('link', { name: eventName }).click();
  }

  async fillBookingForm(fullName, email, phoneNumber) {
    await this.page.getByRole('textbox', { name: this.locators.fullNameInput }).fill(fullName);
    await this.page.locator(this.locators.customerEmailInput).fill(email);
    await this.page.getByRole('textbox', { name: this.locators.phoneNumberInput }).fill(phoneNumber);
  }

  async confirmBooking() {
    await this.page.getByRole('button', { name: this.locators.confirmBookingButton }).click();
  }

  async viewMyBookings() {
    await this.page.getByRole('button', { name: this.locators.viewMyBookingsButton }).click();
  }

  async viewBookingDetails() {
    await this.page.getByRole('button', { name: this.locators.viewDetailsButton }).first().click();
  }

  async logout() {
    await this.page.locator(this.locators.logoutButton).click();
  }

  async waitForNavigation(timeout = 6000) {
    await this.page.waitForTimeout(timeout);
  }
}
