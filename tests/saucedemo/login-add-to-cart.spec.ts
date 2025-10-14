import { test } from "@playwright/test";
import { SaucedemoLoginPage } from "../../pages/saucedemo/saucedemo.login.page";
import { SaucedemoInventoryPage } from "../../pages/saucedemo/saucedemo.inventory.page";
import { SaucedemoCartPage } from "../../pages/saucedemo/saucedemo.cart.page";
import { readJson } from "../../utils/readJson";

interface UserCredentials {
  standard: {
    username: string;
    password: string;
  };
  locked: {
    username: string;
    password: string;
  };
}

test.describe("Exercise 4: Login and Add Product to Cart", () => {
  test("Should login, add product to cart, verify and logout", async ({ page }) => {
    // Read user credentials from JSON file based on TEST_ENV
    const userCredentials = readJson<UserCredentials>("user-saucedemo.json");
    const { username, password } = userCredentials.standard;

    const loginPage = new SaucedemoLoginPage(page);
    const inventoryPage = new SaucedemoInventoryPage(page);
    const cartPage = new SaucedemoCartPage(page);

    // Step 1: Navigate to saucedemo.com and login
    await loginPage.open();
    await loginPage.login(username, password);

    // Step 2: Verify login success and check page title
    await loginPage.verifyLoginSuccess();

    // Step 3: Find a product and add to cart
    const productName = "Sauce Labs Backpack";
    await inventoryPage.addProduct(productName);

    // Step 4: Navigate to cart and verify product is added
    await inventoryPage.goToCart();
    await cartPage.verifyProductInCart(productName);

    // Step 5: Logout
    await cartPage.logout();
  });
});
