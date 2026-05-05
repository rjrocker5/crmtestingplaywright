/**
 * Logging utility for better debugging and test execution tracking
 */

const LOG_LEVELS = {
  DEBUG: 'DEBUG',
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
  PASS: 'PASS',
  FAIL: 'FAIL'
};

const LOG_COLORS = {
  DEBUG: '\x1b[36m',    // Cyan
  INFO: '\x1b[34m',     // Blue
  WARN: '\x1b[33m',     // Yellow
  ERROR: '\x1b[31m',    // Red
  PASS: '\x1b[32m',     // Green
  FAIL: '\x1b[35m',     // Magenta
  RESET: '\x1b[0m'
};

/**
 * Get formatted timestamp
 * @returns {string} Formatted timestamp
 */
function getTimestamp() {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    fractionalSecondDigits: 3
  });
}

/**
 * Format log message with timestamp and level
 * @param {string} level - Log level
 * @param {string} message - Log message
 * @returns {string} Formatted message
 */
function formatLog(level, message) {
  const color = LOG_COLORS[level] || LOG_COLORS.INFO;
  const reset = LOG_COLORS.RESET;
  return `${color}[${getTimestamp()}] [${level}]${reset} ${message}`;
}

/**
 * Log debug message
 * @param {string} message - Message to log
 */
export function logDebug(message) {
  console.log(formatLog(LOG_LEVELS.DEBUG, message));
}

/**
 * Log info message
 * @param {string} message - Message to log
 */
export function logInfo(message) {
  console.log(formatLog(LOG_LEVELS.INFO, message));
}

/**
 * Log warning message
 * @param {string} message - Message to log
 */
export function logWarn(message) {
  console.warn(formatLog(LOG_LEVELS.WARN, message));
}

/**
 * Log error message
 * @param {string} message - Message to log
 * @param {Error} error - Error object (optional)
 */
export function logError(message, error = null) {
  console.error(formatLog(LOG_LEVELS.ERROR, message));
  if (error) {
    console.error(error.stack);
  }
}

/**
 * Log test pass
 * @param {string} message - Message to log
 */
export function logPass(message) {
  console.log(formatLog(LOG_LEVELS.PASS, `✓ ${message}`));
}

/**
 * Log test fail
 * @param {string} message - Message to log
 */
export function logFail(message) {
  console.log(formatLog(LOG_LEVELS.FAIL, `✗ ${message}`));
}

/**
 * Log section separator
 * @param {string} sectionName - Section name
 */
export function logSection(sectionName) {
  const separator = '='.repeat(60);
  console.log(`\n${LOG_COLORS.INFO}${separator}${LOG_COLORS.RESET}`);
  console.log(formatLog(LOG_LEVELS.INFO, `>>> ${sectionName}`));
  console.log(`${LOG_COLORS.INFO}${separator}${LOG_COLORS.RESET}\n`);
}

/**
 * Log page action
 * @param {string} action - Action description
 * @param {string} locator - Element locator (optional)
 */
export function logPageAction(action, locator = '') {
  const message = locator ? `${action} [${locator}]` : action;
  logInfo(`Page Action: ${message}`);
}

/**
 * Log assertion
 * @param {string} assertion - Assertion description
 * @param {boolean} result - Assertion result
 */
export function logAssertion(assertion, result) {
  if (result) {
    logPass(assertion);
  } else {
    logFail(assertion);
  }
}

/**
 * Log test execution time
 * @param {string} testName - Test name
 * @param {number} startTime - Start time in milliseconds
 */
export function logExecutionTime(testName, startTime) {
  const endTime = Date.now();
  const duration = endTime - startTime;
  logInfo(`Test "${testName}" completed in ${duration}ms`);
}
