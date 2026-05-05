import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI - 2 retries on CI, 0 locally */
  retries: process.env.CI ? 2 : 0,
  
  /* Number of workers for parallel execution */
  workers: process.env.CI ? 1 : 4,
  
  /* Reporter to use */
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['list']
  ],

  /* Global timeout for test execution */
  timeout: 60000,
  
  /* Timeout for expect assertions */
  expect: {
    timeout: 10000
  },

  /* Shared settings for all the projects below */
  use: {
    /* Headless mode - set to true for CI/CD */
    headless: process.env.HEADLESS !== 'false',
    
    /* Screenshot on failure */
    screenshot: 'only-on-failure',
    
    /* Video on failure */
    video: 'retain-on-failure',
    
    /* Trace on first retry for debugging */
    trace: 'on-first-retry',
    
    /* Action timeout */
    actionTimeout: 10000,
    
    /* Navigation timeout */
    navigationTimeout: 30000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Uncomment to test on Firefox
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // Uncomment to test on WebKit
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  /* Uncomment to run local dev server before starting tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
