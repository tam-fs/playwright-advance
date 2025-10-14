import { Page, Locator } from "@playwright/test";
import { CommonLocators } from "./common-locators";

export class SaucedemoLocators extends CommonLocators {
  loginUsername!: Locator;
  loginPassword!: Locator;
  loginButton!: Locator;
  title!: Locator;
  inventoryPageTitle!: Locator;
  cartIcon!: Locator;
  cartItems!: Locator;
  menuButton!: Locator;
  logoutLink!: Locator;
  productAddButton!: (productName: string) => Locator;
  cartItemByName!: (productName: string) => Locator;

  constructor(page: Page) {
    super(page);
    this.initializeLocators();
  }

  protected initializeLocators(): void {
    super.initializeLocators();
    this.loginUsername = this.page.locator('//input[@id="user-name"]');
    this.loginPassword = this.page.locator('//input[@id="password"]');
    this.loginButton = this.page.locator('//input[@id="login-button"]');
    this.title = this.page.locator("//span[@class='title']");
    this.inventoryPageTitle = this.page.locator("//span[@class='title']");
    this.productAddButton = (productName: string) => this.page.locator(`text=${productName}`).locator("xpath=ancestor::div[@class='inventory_item']//button");
    this.cartIcon = this.page.locator("//a[@class='shopping_cart_link']");
    this.cartItems = this.page.locator("//div[@class='cart_item']");
    this.cartItemByName = (productName: string) => this.page.locator("//div[@class='cart_item']").filter({ hasText: productName });
    this.menuButton = this.page.locator("//button[@id='react-burger-menu-btn']");
    this.logoutLink = this.page.locator("//a[@id='logout_sidebar_link']");
  }

}
