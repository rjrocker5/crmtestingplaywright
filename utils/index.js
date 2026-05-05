/**
 * Centralized exports for all utility modules
 * Usage: import { generateRandomEmail, expectVisible, waitForVisible } from '../utils'
 */

// Wait utilities
export {
  waitForPageLoad,
  waitForVisible,
  waitForHidden,
  waitForElementEnabled,
  waitForUrlContains,
  waitForTimeout,
  waitForCondition
} from './waitUtils';

// Random data utilities
export {
  generateRandomEmail,
  generateRandomFirstName,
  generateRandomLastName,
  generateRandomFullName,
  generateRandomPhoneNumber,
  generateUniqueText,
  generateRandomString,
  generateRandomNumber,
  generateRandomPassword
} from './randomDataUtils';

// Date utilities
export {
  getCurrentDate,
  getFutureDate,
  getPastDate,
  formatDate,
  getDateInMMDDYYYYFormat,
  isToday,
  daysBetween,
  addMonths
} from './dateUtils';

// File utilities
export {
  getTestFilePath,
  getFilePath,
  fileExists,
  readFileContent,
  writeFileContent,
  deleteFile,
  getFilesInDirectory,
  verifyDownloadedFileExists,
  getFileSize,
  clearDirectory
} from './fileUtils';

// Assertion utilities
export {
  expectVisible,
  expectHidden,
  expectTextContains,
  expectTextEquals,
  expectUrlContains,
  expectEnabled,
  expectDisabled,
  expectChecked,
  expectUnchecked,
  expectAttributeValue,
  expectElementCount,
  expectHasClass,
  expectValueInPage
} from './assertionUtils';

// API utilities
export {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
  getResponseJson,
  getResponseStatus,
  isResponseSuccessful,
  getResponseHeaders,
  getRequestJson,
  postRequestJson
} from './apiUtils';

// Logging utilities
export {
  logDebug,
  logInfo,
  logWarn,
  logError,
  logPass,
  logFail,
  logSection,
  logPageAction,
  logAssertion,
  logExecutionTime
} from './loggingUtils';
