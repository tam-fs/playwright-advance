import { test, expect } from '@playwright/test';
import { DemoqaButtonPage } from '../../pages/demoqa/demoqa.button.page';

test.describe('demoqa button', () => {
  test('Exercise 2: click button test', async ({ page }) => {
    const buttonPage = new DemoqaButtonPage(page);

    // Navigate to button page
    await buttonPage.navigateToButton();
    await buttonPage.takeScreenshot('01-button-page-loaded');

    // Double click button
    await buttonPage.doubleClickButton();
    await buttonPage.verifyDoubleClickMessage();
    await buttonPage.takeScreenshot('02-double-click-verified');

    // Right click button
    await buttonPage.rightClickButton();
    await buttonPage.verifyRightClickMessage();
    await buttonPage.takeScreenshot('03-right-click-verified');

    // Click dynamic button
    await buttonPage.clickDynamicButton();
    await buttonPage.verifyDynamicClickMessage();
    await buttonPage.takeScreenshot('04-dynamic-click-verified');
  });
});