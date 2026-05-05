import { BasePage } from './BasePage';
import { CRM_REGISTRATION_LOCATORS } from '../locators/crmRegistrationPageLocators';
import { APP_URLS } from '../constants/urls';

export class CRMRegistrationPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = CRM_REGISTRATION_LOCATORS;
  }

  async navigateToRegistration() {
    await this.navigateTo(APP_URLS.CRM_REGISTRATION);
  }

  async fillFirstName(firstName) {
    await this.page.locator(this.locators.firstNameInput).fill(firstName);
  }

  async fillLastName(lastName) {
    await this.page.getByPlaceholder(this.locators.lastNameInput).fill(lastName);
  }

  async fillEmail(email) {
    await this.page.getByPlaceholder(this.locators.emailInput).fill(email);
  }

  async fillPhoneNumber(phoneNumber) {
    await this.page.getByPlaceholder(this.locators.phoneInput).fill(phoneNumber);
  }

  async selectOccupation(occupation) {
    await this.page.locator(this.locators.occupationSelect).selectOption(occupation);
  }

  async selectGender() {
    await this.page.locator(this.locators.maleRadio).check();
  }

  async fillPassword(password) {
    await this.page.locator(this.locators.passwordInput).fill(password);
  }

  async fillConfirmPassword(confirmPassword) {
    await this.page.locator(this.locators.confirmPasswordInput).fill(confirmPassword);
  }

  async acceptTerms() {
    await this.page.locator(this.locators.termsCheckbox).check();
  }

  async submitForm() {
    await this.page.locator(this.locators.submitButton).click();
  }

  async fillRegistrationForm(credentials) {
    await this.fillFirstName(credentials.firstName);
    await this.fillLastName(credentials.lastName);
    await this.fillEmail(credentials.email);
    await this.fillPhoneNumber(credentials.phoneNumber);
    await this.selectOccupation(credentials.occupation);
    await this.selectGender();
    await this.fillPassword(credentials.password);
    await this.fillConfirmPassword(credentials.confirmPassword);
    await this.acceptTerms();
  }
}
