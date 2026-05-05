import { BasePage } from './BasePage';
import { GREENKART_LOCATORS } from '../locators/greenkartPageLocators';
import { APP_URLS } from '../constants/urls';

export class GreenkartPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = GREENKART_LOCATORS;
  }

  async navigateToStore() {
    await this.navigateTo(APP_URLS.GREENKART_STORE);
  }

  async addProductToCart(productName) {
    const addButtonLocator = this.locators.productNamePattern(productName);
    await this.page.locator(addButtonLocator).click();
  }

  async addMultipleProductsToCart(productNames) {
    for (const productName of productNames) {
      await this.addProductToCart(productName);
    }
  }

  async goToCart() {
    await this.page.locator(this.locators.cartIcon).click();
  }

  async proceedToCheckout() {
    await this.page.locator(this.locators.proceedToCheckout).click();
  }

  async placeOrder() {
    await this.page.locator(this.locators.placeOrder).click();
  }

  async selectCountry(countryName) {
    await this.page.locator(this.locators.countrySelect).selectOption(countryName);
  }

  async acceptTermsAndConditions() {
    await this.page.locator(this.locators.termsCheckbox).check();
  }

  async proceedWithOrder() {
    await this.page.locator(this.locators.proceedButton).click();
  }

  async completeCheckoutFlow(countryName) {
    await this.proceedToCheckout();
    await this.placeOrder();
    await this.selectCountry(countryName);
    await this.acceptTermsAndConditions();
    await this.proceedWithOrder();
  }
}
