/**
 * Random data generation utility functions
 */

/**
 * Generate a random email address
 * @param {string} domain - Email domain (default: 'example.com')
 * @returns {string} Random email address
 */
export function generateRandomEmail(domain = 'example.com') {
  const randomString = Math.random().toString(36).substring(2, 12);
  const timestamp = Date.now();
  return `user_${randomString}_${timestamp}@${domain}`;
}

/**
 * Generate a random first name
 * @returns {string} Random first name
 */
export function generateRandomFirstName() {
  const firstNames = ['John', 'Jane', 'Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank'];
  return firstNames[Math.floor(Math.random() * firstNames.length)] + Math.floor(Math.random() * 1000);
}

/**
 * Generate a random last name
 * @returns {string} Random last name
 */
export function generateRandomLastName() {
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
  return lastNames[Math.floor(Math.random() * lastNames.length)];
}

/**
 * Generate a random full name
 * @returns {string} Random full name
 */
export function generateRandomFullName() {
  return `${generateRandomFirstName()} ${generateRandomLastName()}`;
}

/**
 * Generate a random phone number
 * @param {string} countryCode - Country code (default: empty)
 * @returns {string} Random phone number (10 digits)
 */
export function generateRandomPhoneNumber(countryCode = '') {
  const digits = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).join('');
  return countryCode ? `${countryCode}${digits}` : digits;
}

/**
 * Generate a random alphanumeric string
 * @param {number} length - Length of string (default: 10)
 * @returns {string} Random alphanumeric string
 */
export function generateUniqueText(length = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const timestamp = Date.now().toString().slice(-6);
  let result = '';
  for (let i = 0; i < length - 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result + timestamp;
}

/**
 * Generate a random string of specified length
 * @param {number} length - Length of string
 * @returns {string} Random string
 */
export function generateRandomString(length = 10) {
  return Math.random().toString(36).substring(2, 2 + length);
}

/**
 * Generate a random number within range
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random number
 */
export function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random password
 * @param {number} length - Password length (default: 12)
 * @returns {string} Random password with mixed case, numbers, and symbols
 */
export function generateRandomPassword(length = 12) {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*';
  const allChars = uppercase + lowercase + numbers + symbols;
  
  let password = '';
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  
  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  
  return password.split('').sort(() => Math.random() - 0.5).join('');
}
