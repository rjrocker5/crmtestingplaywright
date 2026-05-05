/**
 * Wait utility functions for common wait scenarios
 */

/**
 * Wait for page to be fully loaded
 * @param {Page} page - Playwright page object
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForPageLoad(page, timeout = 30000) {
  await page.waitForLoadState('networkidle', { timeout });
}

/**
 * Wait for an element to be visible
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForVisible(page, locator, timeout = 5000) {
  await page.locator(locator).waitFor({ state: 'visible', timeout });
}

/**
 * Wait for an element to be hidden
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForHidden(page, locator, timeout = 5000) {
  await page.locator(locator).waitFor({ state: 'hidden', timeout });
}

/**
 * Wait for an element to be enabled
 * @param {Page} page - Playwright page object
 * @param {string} locator - Element locator
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForElementEnabled(page, locator, timeout = 5000) {
  await page.locator(locator).waitFor({ state: 'visible', timeout });
  const isEnabled = await page.locator(locator).isEnabled();
  if (!isEnabled) {
    throw new Error(`Element ${locator} is not enabled within ${timeout}ms`);
  }
}

/**
 * Wait for URL to contain specified string
 * @param {Page} page - Playwright page object
 * @param {string|RegExp} urlPattern - URL pattern to match
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForUrlContains(page, urlPattern, timeout = 30000) {
  await page.waitForURL(urlPattern, { timeout });
}

/**
 * Wait for a specific timeout (milliseconds)
 * @param {number} milliseconds - Time to wait
 */
export async function waitForTimeout(milliseconds = 1000) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

/**
 * Wait for function to return true
 * @param {Function} fn - Function to execute
 * @param {number} timeout - Timeout in milliseconds
 * @param {number} interval - Check interval in milliseconds
 */
export async function waitForCondition(fn, timeout = 10000, interval = 500) {
  const startTime = Date.now();
  while (Date.now() - startTime < timeout) {
    if (await fn()) {
      return true;
    }
    await waitForTimeout(interval);
  }
  throw new Error(`Condition not met within ${timeout}ms`);
}
