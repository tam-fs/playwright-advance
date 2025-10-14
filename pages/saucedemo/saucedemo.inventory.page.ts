import { Page, expect } from "@playwright/test";
import { CommonPage } from "../common-pages";
import { SaucedemoLocators } from "../../locators/saucedemo-locators";
import { step } from "../../utils/logging";

export class SaucedemoInventoryPage extends CommonPage {
  readonly loc: SaucedemoLocators;

  constructor(page: Page) {
    super(page);
    this.loc = new SaucedemoLocators(page);
  }

  @step((name) => `Add product to cart: ${name}`)
  async addProduct(name: string): Promise<void> {
    const btn = this.loc.productAddButton(name);
    await this.waitForVisible(btn);
    await this.click(btn);
    await this.takeScreenshot("02-product-added");
  }

  @step("Go to cart")
  async goToCart(): Promise<void> {
    await this.click(this.loc.cartIcon);
  }
}
