import { Page, expect } from "@playwright/test";
import { CommonPage } from "../common-pages";
import { SaucedemoLocators } from "../../locators/saucedemo-locators";
import { step } from "../../utils/logging";

export class SaucedemoLoginPage extends CommonPage {
  readonly sauceLoc: SaucedemoLocators;

  constructor(page: Page) {
    super(page);
    this.sauceLoc = new SaucedemoLocators(page);
  }
  

  @step("Open Saucedemo login page")
  async open(): Promise<void> {
    await this.navigate("https://www.saucedemo.com/");
  }

  @step("Login to Saucedemo")
  async login(username: string, password: string): Promise<void> {
    await this.fill(this.sauceLoc.loginUsername, username);
    await this.fill(this.sauceLoc.loginPassword, password);
    await this.click(this.sauceLoc.loginButton);
  }

  @step("Verify login success and check page title")
  async verifyLoginSuccess(): Promise<void> {
    await this.waitForVisible(this.sauceLoc.inventoryPageTitle);
    await expect(this.sauceLoc.inventoryPageTitle).toBeVisible();
    
    const pageTitle = await this.getText(this.sauceLoc.inventoryPageTitle);
    console.log("Login thành công");
    console.log(`Title của trang web là: ${pageTitle}`);
    
    await this.takeScreenshot("01-login-success");
  }
}
