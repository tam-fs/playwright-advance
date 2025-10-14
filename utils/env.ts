export const TEST_ENV = (process.env.TEST_ENV || "stg").toLowerCase();
export const HEADLESS = process.env.HEADLESS === "true";
export const WORKERS = Number(process.env.WORKERS || 4);
export const BASE_URL = process.env.BASE_URL || "https://www.saucedemo.com";
