import { Page, expect } from "@playwright/test";
import { CommonPage } from "../common-pages";
import { DemoqaLocators } from "../../locators/demoqa-locators";
import { step } from "../../utils/logging";
import { DEMOQA_BUTTONS_URL } from "../../constants";

export class DemoqaButtonPage extends CommonPage {
  readonly demoqaLocators: DemoqaLocators;

  constructor(page: Page) {
    super(page);
    this.demoqaLocators = new DemoqaLocators(page);
  }

  @step("Navigate to Button page")
  async navigateToButton(): Promise<void> {
    await this.navigate(DEMOQA_BUTTONS_URL);
  }

  @step("Double click button")
  async doubleClickButton(): Promise<void> {
    await this.dblclick(this.demoqaLocators.doubleClickBtn);
  }

  @step("Right click button")
  async rightClickButton(): Promise<void> {
    await this.demoqaLocators.rightClickBtn.click({ button: 'right' });
  }

  @step("Click dynamic button")
  async clickDynamicButton(): Promise<void> {
    await this.click(this.demoqaLocators.clickMeBtn);
  }

  @step("Verify double click message")
  async verifyDoubleClickMessage(expectedMessage: string = 'You have done a double click'): Promise<void> {
    await expect(this.demoqaLocators.doubleClickMessage).toHaveText(expectedMessage);
  }

  @step("Verify right click message")
  async verifyRightClickMessage(expectedMessage: string = 'You have done a right click'): Promise<void> {
    await expect(this.demoqaLocators.rightClickMessage).toHaveText(expectedMessage);
  }

  @step("Verify dynamic click message")
  async verifyDynamicClickMessage(expectedMessage: string = 'You have done a dynamic click'): Promise<void> {
    await expect(this.demoqaLocators.dynamicClickMessage).toHaveText(expectedMessage);
  }
}
