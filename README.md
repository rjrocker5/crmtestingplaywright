# Playwright Automation Framework

A production-ready, scalable Playwright test automation framework using the **Page Object Model (POM)** pattern with a comprehensive utilities layer.

## 📋 Project Structure

```
Playwright/
├── pages/
│   ├── BasePage.js                    # Base class for all page objects
│   ├── crmRegistrationPage.js         # CRM registration page object
│   ├── eventbookingPage.js            # Event booking page object
│   └── greenkartPage.js               # Greenkart store page object
│
├── locators/
│   ├── crmRegistrationPageLocators.js
│   ├── eventbookingPageLocators.js
│   └── greenkartPageLocators.js
│
├── tests/
│   ├── crmtest.spec.js
│   ├── eventbooking.spec.js
│   └── greenkart.spec.js
│
├── testdata/
│   ├── crmTestData.js
│   └── eventBookingTestData.js
│
├── utils/
│   ├── index.js                       # Centralized exports
│   ├── waitUtils.js                   # Wait functions
│   ├── randomDataUtils.js             # Random data generation
│   ├── dateUtils.js                   # Date helpers
│   ├── fileUtils.js                   # File operations
│   ├── assertionUtils.js              # Assertion helpers
│   ├── apiUtils.js                    # API request helpers
│   └── loggingUtils.js                # Logging utilities
│
├── constants/
│   ├── urls.js                        # Application URLs
│   └── config.js                      # Configuration constants
│
├── playwright.config.ts               # Playwright configuration
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
npm install
# or
yarn install
```

### Running Tests

```bash
# Run all tests
npm test
# or
npx playwright test

# Run tests in headed mode (with browser UI)
npx playwright test --headed

# Run specific test file
npx playwright test tests/greenkart.spec.js

# Run tests with specific tag
npx playwright test --grep @smoke

# Run with UI mode (interactive)
npx playwright test --ui

# Generate HTML report
npx playwright test
npx playwright show-report
```

## 📚 Framework Architecture

### Page Object Model (POM)

All page objects extend `BasePage` which provides common functionality:

```javascript
import { BasePage } from './BasePage';
import { APP_URLS } from '../constants/urls';

export class MyPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = MY_LOCATORS;
  }

  async navigateToPage() {
    await this.navigateTo(APP_URLS.MY_PAGE);
  }

  async fillEmail(email) {
    await this.fillInput(this.locators.emailInput, email);
  }
}
```

### BasePage Methods

```javascript
// Navigation
await page.navigateTo(url)
await page.getCurrentUrl()

// Element Interactions
await page.click(locator)
await page.fillInput(locator, value)
await page.selectOption(locator, value)
await page.checkBox(locator)

// Queries
await page.getText(locator)
await page.isVisible(locator)
await page.isEnabled(locator)
await page.getPageTitle()

// Waits
await page.waitForElement(locator, timeout)
```

## 🛠️ Utilities

### Wait Utils
```javascript
import { 
  waitForPageLoad, 
  waitForVisible, 
  waitForUrlContains, 
  waitForTimeout 
} from '../utils';

await waitForPageLoad(page);           // Wait for network idle
await waitForVisible(page, '.button'); // Wait for element visible
await waitForUrlContains(page, '/dashboard');
await waitForTimeout(5000);            // Simple delay
```

### Random Data Utils
```javascript
import { 
  generateRandomEmail, 
  generateRandomPassword, 
  generateRandomPhoneNumber,
  generateRandomFullName 
} from '../utils';

const email = generateRandomEmail('company.com');
const password = generateRandomPassword(14);
const phone = generateRandomPhoneNumber();
const name = generateRandomFullName();
```

### Date Utils
```javascript
import { 
  getCurrentDate, 
  getFutureDate, 
  formatDate,
  daysBetween 
} from '../utils';

const today = getCurrentDate();           // YYYY-MM-DD
const futureDate = getFutureDate(7);     // 7 days from today
const formatted = formatDate(new Date(), 'MM/DD/YYYY');
const days = daysBetween(date1, date2);
```

### Assertion Utils
```javascript
import { 
  expectVisible, 
  expectTextContains, 
  expectEnabled,
  expectUrlContains 
} from '../utils';

await expectVisible(page, '.success-message');
await expectTextContains(page, '.title', 'Welcome');
await expectEnabled(page, 'button.submit');
await expectUrlContains(page, '/dashboard');
```

### Logging Utils
```javascript
import { 
  logInfo, 
  logPass, 
  logSection,
  logPageAction,
  logExecutionTime 
} from '../utils';

logSection('LOGIN TEST');          // Print section header
logInfo('Filling login form');      // Info message
logPass('Login successful');        // Success message
logPageAction('Clicked login button', 'button.login');
logExecutionTime('Test Name', startTime);
```

### API Utils
```javascript
import { 
  getRequest, 
  postRequest, 
  getRequestJson,
  postRequestJson 
} from '../utils';

const response = await getRequest(request, url);
const data = await getRequestJson(request, url);
const result = await postRequestJson(request, url, {name: 'John'});
const status = getResponseStatus(response);
```

### File Utils
```javascript
import { 
  getTestFilePath, 
  readFileContent,
  fileExists,
  verifyDownloadedFileExists 
} from '../utils';

const filePath = getTestFilePath('test.csv');
const content = readFileContent(filePath);
if (fileExists(filePath)) { ... }
await verifyDownloadedFileExists('invoice.pdf');
```

## 📝 Writing Tests

### Basic Test Example

```javascript
import { test } from '@playwright/test';
import { MyPage } from '../pages/myPage';
import { 
  generateRandomEmail, 
  waitForVisible,
  expectVisible,
  logSection,
  logInfo,
  logPass 
} from '../utils';

test('user registration with random data', async ({ page }) => {
  logSection('USER REGISTRATION TEST');
  
  const myPage = new MyPage(page);
  const email = generateRandomEmail('mycompany.com');

  logInfo('Navigating to registration page');
  await myPage.navigateToRegistration();
  
  logInfo('Filling registration form');
  await myPage.fillEmail(email);
  await myPage.fillPassword('SecurePass@123');
  
  logInfo('Submitting form');
  await myPage.submitForm();
  
  logPass('Registration successful');
  await expectVisible(page, '.success-message');
});
```

## 🔧 Constants

All URLs and configuration values are centralized:

### URLs (constants/urls.js)
```javascript
export const APP_URLS = {
  CRM_REGISTRATION: 'https://rahulshettyacademy.com/client/#/auth/register',
  EVENT_BOOKING_LOGIN: 'https://eventhub.rahulshettyacademy.com/login',
  GREENKART_STORE: 'https://rahulshettyacademy.com/seleniumPractise/#/'
};
```

### Config (constants/config.js)
```javascript
export const TIMEOUTS = {
  SHORT: 1000,
  DEFAULT: 5000,
  MEDIUM: 10000,
  LONG: 30000,
  PAGE_LOAD: 30000
};

export const RETRY_OPTIONS = {
  maxRetries: 3,
  delayMs: 1000
};
```

## 📊 Logging Output

The framework provides colored, timestamped logs for better visibility:

```
[13:45:23.123] [INFO] >>> LOGIN TEST
[13:45:23.234] [INFO] Page Action: Navigating to login page
[13:45:24.567] [PASS] ✓ Page loaded successfully
[13:45:25.890] [INFO] Page Action: Filled email [//input[@id='email']]
[13:45:26.123] [PASS] ✓ Login successful
[13:45:26.234] [INFO] Test "Login Test" completed in 3111ms
```

## 🎯 Best Practices

### 1. **Page Objects**
- Extend `BasePage` for common functionality
- Keep selectors only in locator files
- Return page objects for method chaining
- One page object per page/feature

### 2. **Tests**
- Use descriptive test names
- One assertion per action
- Use utilities instead of hardcoded values
- Log important steps for debugging
- Clean up resources in finally block

### 3. **Utilities**
- Never put selectors in utils
- Keep functions small and focused
- Document with JSDoc comments
- Handle errors gracefully
- Use async/await consistently

### 4. **Data**
- Externalize test data in testdata folder
- Use random data generators for unique values
- Use constants for URLs and timeouts
- Never hardcode sensitive data

## 🐛 Debugging

### Run with Debug Mode
```bash
npx playwright test --debug
```

### Run with UI Mode
```bash
npx playwright test --ui
```

### View Test Report
```bash
npx playwright show-report
```

### Verbose Logging
```bash
DEBUG=pw:api npx playwright test
```

## 📦 Adding New Tests

### Step 1: Create Locators
```javascript
// locators/newPageLocators.js
export const NEW_PAGE_LOCATORS = {
  emailInput: "//input[@id='email']",
  submitButton: "//button[text()='Submit']"
};
```

### Step 2: Create Page Object
```javascript
// pages/newPage.js
import { BasePage } from './BasePage';
import { NEW_PAGE_LOCATORS } from '../locators/newPageLocators';
import { APP_URLS } from '../constants/urls';

export class NewPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = NEW_PAGE_LOCATORS;
  }

  async navigateToPage() {
    await this.navigateTo(APP_URLS.NEW_PAGE);
  }

  async fillEmail(email) {
    await this.fillInput(this.locators.emailInput, email);
  }
}
```

### Step 3: Create Test
```javascript
// tests/newpage.spec.js
import { test } from '@playwright/test';
import { NewPage } from '../pages/newPage';
import { generateRandomEmail, logSection, logPass } from '../utils';

test('new page test', async ({ page }) => {
  logSection('NEW PAGE TEST');
  const newPage = new NewPage(page);
  const email = generateRandomEmail();

  await newPage.navigateToPage();
  await newPage.fillEmail(email);
  
  logPass('Test completed');
});
```

## 🔐 Configuration

Edit `playwright.config.ts` to customize:
- Browser types (chromium, firefox, webkit)
- Parallelization
- Retries
- Timeouts
- Report generation

## 📖 Documentation

For more information:
- [Playwright Official Docs](https://playwright.dev)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [API Reference](https://playwright.dev/docs/api/class-page)

## 💡 Tips & Tricks

```javascript
// Use centralized import
import { waitForVisible, expectVisible, logInfo } from '../utils';

// Chain BasePage methods (extend for method chaining)
const user = await newPage
  .fillEmail(email)
  .fillPassword(password)
  .submitForm();

// Use fixtures for setup/teardown
test.beforeEach(async ({ page }) => {
  // Setup code
});

test.afterEach(async ({ page }) => {
  // Cleanup code
});
```

## 📞 Support

For issues, questions, or improvements, please refer to the project documentation or Playwright official resources.

---

**Version**: 2.0  
**Last Updated**: May 2026  
**Maintained by**: QA Team
