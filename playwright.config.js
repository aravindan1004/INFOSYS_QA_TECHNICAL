
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,

  timeout : 50000,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['line'],
  ['html', { outputFolder: 'my-report' , open: 'never'}],
],

  use: {
    trace: 'retain-on-failure',
    screenshot : 'only-on-failure',
    video : 'on-first-retry',
    baseURL : 'https://reqres.in/',
    headless : false
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

