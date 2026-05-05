/**
 * Global configuration constants
 */

export const TIMEOUTS = {
  SHORT: 1000,
  DEFAULT: 5000,
  MEDIUM: 10000,
  LONG: 30000,
  PAGE_LOAD: 30000,
  NETWORK_IDLE: 30000
};

export const WAIT_INTERVALS = {
  FAST: 100,
  DEFAULT: 500,
  SLOW: 1000
};

export const TEST_ENVIRONMENT = process.env.ENV || 'test';

export const BROWSER_CONTEXT_OPTIONS = {
  viewport: { width: 1280, height: 720 },
  ignoreHTTPSErrors: true
};

export const RETRY_OPTIONS = {
  maxRetries: 3,
  delayMs: 1000
};

/**
 * Test data directories
 */
export const TEST_DATA_PATHS = {
  ROOT: 'testdata',
  CRM: 'testdata/crmTestData.js',
  EVENT_BOOKING: 'testdata/eventBookingTestData.js'
};

/**
 * Assertion messages
 */
export const ASSERTION_MESSAGES = {
  ELEMENT_VISIBLE: 'Element should be visible',
  ELEMENT_HIDDEN: 'Element should be hidden',
  TEXT_MATCH: 'Text content should match',
  URL_CONTAINS: 'URL should contain the expected pattern',
  ELEMENT_ENABLED: 'Element should be enabled',
  ELEMENT_DISABLED: 'Element should be disabled'
};
