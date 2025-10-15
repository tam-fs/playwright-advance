import { Page, expect } from "@playwright/test";
import { CommonPage } from "../common-pages";
import { SaucedemoLocators } from "../../locators/saucedemo-locators";
import { step } from "../../utils/logging";

export class SaucedemoCartPage extends CommonPage {
  readonly loc: SaucedemoLocators;

  constructor(page: Page) {
    super(page);
    this.loc = new SaucedemoLocators(page);
  }

  @step((product) => `Verify product in cart: ${product}`)
  async verifyProductInCart(product: string): Promise<void> {
    const productItem = this.loc.cartItemByName(product);
    await this.waitForVisible(productItem);
    await expect(productItem).toBeVisible();
    console.log(`Sản phẩm '${product}' đã có trong giỏ hàng`);
    await this.takeScreenshot("04-2-cart-verified");
  }

  @step("Logout user")
  async logout(): Promise<void> {
    await this.click(this.loc.menuButton);
    await this.waitForVisible(this.loc.logoutLink);
    await this.click(this.loc.logoutLink);
  }
}
