import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

const BASE_URL = process.env.BASE_URL || 'https://demoqa.com';
const HEADLESS = process.env.HEADLESS === 'true';
const WORKERS = parseInt(process.env.WORKERS || '4', 10);


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: WORKERS,
  reporter: [
    ['html'],
    ['allure-playwright', {
      outputFolder: 'allure-results',
      detail: true,
      suiteTitle: false
    }]
  ],
  use: {
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 500,
    },
    baseURL: BASE_URL,
    headless: HEADLESS,
    screenshot: 'only-on-failure',
    actionTimeout: 40_000,
    navigationTimeout: 60_000
  },

  projects: [
    // {
    //   name: 'chromium',
    //   use: { 
    //     viewport: null, 
    //     launchOptions: {
    //       args: ['--start-maximized']
    //     }
    //   },
    // },

    {
      name: 'Microsoft Edge',
      use: { 
        channel: 'msedge',
        viewport: null, 
        launchOptions: {
          args: ['--start-maximized']
        }
      },
    },
    {
      name: 'Google Chrome',
      use: { 
        channel: 'chrome',
        viewport: null, 
        launchOptions: {
          args: ['--start-maximized']
        }
      },
    },
  ],
});
