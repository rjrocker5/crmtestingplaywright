export class EventBookingPage {
  constructor(page) {
    this.page = page;
    // Login page selectors
    this.emailInput = "//input[@id='email']";
    this.passwordInput = "//input[@id='password']";
    this.submitButton = "//button[@type='submit']";
    this.logoutButton = "//button[@id='logout-btn']";
    
    // Event and booking form selectors
    this.eventLink = 'Dilli Diwali Mela';
    this.fullNameInput = 'Full Name*';
    this.customerEmailInput = '[data-testid="customer-email"]';
    this.phoneNumberInput = 'Phone Number*';
    this.confirmBookingButton = 'Confirm Booking';
    this.viewMyBookingsButton = 'View My Bookings';
    this.viewDetailsButton = 'View Details';
  }

  async navigateToLogin() {
    await this.page.goto('https://eventhub.rahulshettyacademy.com/login');
  }

  async login(email, password) {
    await this.page.locator(this.emailInput).fill(email);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.submitButton).click();
  }

  async selectEvent(eventName) {
    await this.page.getByRole('link', { name: eventName }).click();
  }

  async fillBookingForm(fullName, email, phoneNumber) {
    await this.page.getByRole('textbox', { name: this.fullNameInput }).fill(fullName);
    await this.page.locator(this.customerEmailInput).fill(email);
    await this.page.getByRole('textbox', { name: this.phoneNumberInput }).fill(phoneNumber);
  }

  async confirmBooking() {
    await this.page.getByRole('button', { name: this.confirmBookingButton }).click();
  }

  async viewMyBookings() {
    await this.page.getByRole('button', { name: this.viewMyBookingsButton }).click();
  }

  async viewBookingDetails() {
    await this.page.getByRole('button', { name: this.viewDetailsButton }).first().click();
  }

  async logout() {
    await this.page.locator(this.logoutButton).click();
  }

  async waitForNavigation(timeout = 6000) {
    await this.page.waitForTimeout(timeout);
  }
}
