/**
 * Date utility functions for test data and assertions
 */

/**
 * Get today's date in specified format
 * @param {string} format - Format pattern (default: 'YYYY-MM-DD')
 * @returns {string} Formatted date
 */
export function getCurrentDate(format = 'YYYY-MM-DD') {
  return formatDate(new Date(), format);
}

/**
 * Get future date from today
 * @param {number} daysToAdd - Number of days to add
 * @param {string} format - Format pattern (default: 'YYYY-MM-DD')
 * @returns {string} Formatted future date
 */
export function getFutureDate(daysToAdd, format = 'YYYY-MM-DD') {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + daysToAdd);
  return formatDate(futureDate, format);
}

/**
 * Get past date from today
 * @param {number} daysToSubtract - Number of days to subtract
 * @param {string} format - Format pattern (default: 'YYYY-MM-DD')
 * @returns {string} Formatted past date
 */
export function getPastDate(daysToSubtract, format = 'YYYY-MM-DD') {
  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - daysToSubtract);
  return formatDate(pastDate, format);
}

/**
 * Format a date object to specified pattern
 * @param {Date} date - Date object to format
 * @param {string} format - Format pattern (YYYY, MM, DD, HH, mm, ss)
 * @returns {string} Formatted date string
 */
export function formatDate(date, format = 'YYYY-MM-DD') {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * Get date in MM/DD/YYYY format (commonly used in forms)
 * @param {Date} date - Date object (default: today)
 * @returns {string} Formatted date (MM/DD/YYYY)
 */
export function getDateInMMDDYYYYFormat(date = new Date()) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

/**
 * Check if date is today
 * @param {Date} date - Date to check
 * @returns {boolean} True if date is today
 */
export function isToday(date) {
  const today = new Date();
  return date.getDate() === today.getDate() &&
         date.getMonth() === today.getMonth() &&
         date.getFullYear() === today.getFullYear();
}

/**
 * Get number of days between two dates
 * @param {Date} date1 - First date
 * @param {Date} date2 - Second date
 * @returns {number} Number of days between dates
 */
export function daysBetween(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((date1 - date2) / oneDay));
}

/**
 * Add months to a date
 * @param {Date} date - Base date
 * @param {number} months - Number of months to add
 * @returns {Date} New date with added months
 */
export function addMonths(date, months) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
}
