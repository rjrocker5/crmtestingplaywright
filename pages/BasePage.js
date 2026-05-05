/**
 * Base Page Object class
 * All page objects should extend this class to inherit common functionality
 */

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Navigate to a URL
   * @param {string} url - Full URL to navigate to
   */
  async navigateTo(url) {
    await this.page.goto(url);
  }

  /**
   * Get current page URL
   * @returns {string} Current page URL
   */
  getCurrentUrl() {
    return this.page.url();
  }

  /**
   * Fill text input field
   * @param {string} locator - Element locator
   * @param {string} value - Text value to fill
   */
  async fillInput(locator, value) {
    await this.page.locator(locator).fill(value);
  }

  /**
   * Click an element
   * @param {string} locator - Element locator
   */
  async click(locator) {
    await this.page.locator(locator).click();
  }

  /**
   * Get element text
   * @param {string} locator - Element locator
   * @returns {string} Element text content
   */
  async getText(locator) {
    return await this.page.locator(locator).textContent();
  }

  /**
   * Check if element is visible
   * @param {string} locator - Element locator
   * @returns {boolean} True if visible
   */
  async isVisible(locator) {
    return await this.page.locator(locator).isVisible();
  }

  /**
   * Check if element is enabled
   * @param {string} locator - Element locator
   * @returns {boolean} True if enabled
   */
  async isEnabled(locator) {
    return await this.page.locator(locator).isEnabled();
  }

  /**
   * Select option from dropdown
   * @param {string} locator - Element locator
   * @param {string} value - Value to select
   */
  async selectOption(locator, value) {
    await this.page.locator(locator).selectOption(value);
  }

  /**
   * Check a checkbox
   * @param {string} locator - Element locator
   */
  async checkBox(locator) {
    await this.page.locator(locator).check();
  }

  /**
   * Uncheck a checkbox
   * @param {string} locator - Element locator
   */
  async uncheckBox(locator) {
    await this.page.locator(locator).uncheck();
  }

  /**
   * Wait for element to be visible
   * @param {string} locator - Element locator
   * @param {number} timeout - Timeout in milliseconds
   */
  async waitForElement(locator, timeout = 5000) {
    await this.page.locator(locator).waitFor({ state: 'visible', timeout });
  }

  /**
   * Get page title
   * @returns {string} Page title
   */
  async getPageTitle() {
    return await this.page.title();
  }

  /**
   * Close page context
   */
  async closeContext() {
    await this.page.context().close();
  }
}
