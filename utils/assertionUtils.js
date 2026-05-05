/**
 * Assertion utility functions using Playwright expect
 */

import { expect } from '@playwright/test';

/**
 * Assert that element is visible
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 */
export async function expectVisible(page, locator) {
  await expect(page.locator(locator)).toBeVisible();
}

/**
 * Assert that element is hidden
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 */
export async function expectHidden(page, locator) {
  await expect(page.locator(locator)).not.toBeVisible();
}

/**
 * Assert that element contains specific text
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 * @param {string} expectedText - Expected text
 */
export async function expectTextContains(page, locator, expectedText) {
  await expect(page.locator(locator)).toContainText(expectedText);
}

/**
 * Assert that element has exact text
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 * @param {string} expectedText - Expected text
 */
export async function expectTextEquals(page, locator, expectedText) {
  await expect(page.locator(locator)).toHaveText(expectedText);
}

/**
 * Assert that page URL matches pattern
 * @param {Page} page - Playwright page object
 * @param {string|RegExp} urlPattern - URL or pattern
 */
export async function expectUrlContains(page, urlPattern) {
  if (typeof urlPattern === 'string') {
    await expect(page).toHaveURL(new RegExp(urlPattern));
  } else {
    await expect(page).toHaveURL(urlPattern);
  }
}

/**
 * Assert that element is enabled
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 */
export async function expectEnabled(page, locator) {
  await expect(page.locator(locator)).toBeEnabled();
}

/**
 * Assert that element is disabled
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 */
export async function expectDisabled(page, locator) {
  await expect(page.locator(locator)).toBeDisabled();
}

/**
 * Assert that element is checked
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 */
export async function expectChecked(page, locator) {
  await expect(page.locator(locator)).toBeChecked();
}

/**
 * Assert that element is unchecked
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 */
export async function expectUnchecked(page, locator) {
  await expect(page.locator(locator)).not.toBeChecked();
}

/**
 * Assert that element has specific attribute value
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 * @param {string} attributeName - Attribute name
 * @param {string} expectedValue - Expected attribute value
 */
export async function expectAttributeValue(page, locator, attributeName, expectedValue) {
  await expect(page.locator(locator)).toHaveAttribute(attributeName, expectedValue);
}

/**
 * Assert that element count matches expected
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 * @param {number} expectedCount - Expected element count
 */
export async function expectElementCount(page, locator, expectedCount) {
  await expect(page.locator(locator)).toHaveCount(expectedCount);
}

/**
 * Assert that element has CSS class
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 * @param {string} className - CSS class name
 */
export async function expectHasClass(page, locator, className) {
  await expect(page.locator(locator)).toHaveClass(new RegExp(className));
}

/**
 * Assert that specific value is present in page
 * @param {Page} page - Playwright page object
 * @param {string} expectedValue - Value to check
 */
export async function expectValueInPage(page, expectedValue) {
  const content = await page.content();
  expect(content).toContain(expectedValue);
}
