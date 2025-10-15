import { Page, expect } from "@playwright/test";
import { CommonPage } from "../common-pages";
import { DemoqaLocators } from "../../locators/demoqa-locators";
import { step } from "../../utils/logging";
import { DEMOQA_CHECKBOX_URL } from "../../constants";

export class DemoqaCheckboxPage extends CommonPage {
  readonly demoqaLocators: DemoqaLocators;

  constructor(page: Page) {
    super(page);
    this.demoqaLocators = new DemoqaLocators(page);
  }

  @step("Navigate to Checkbox page")
  async navigateToCheckbox(): Promise<void> {
    await this.navigate(DEMOQA_CHECKBOX_URL);
  }

  @step("Expand home dropdown")
  async expandHomeDropdown(): Promise<void> {
    await this.click(this.demoqaLocators.homeDropdown.first());
  }

  @step("Expand desktop dropdown")
  async expandDesktopDropdown(): Promise<void> {
    await this.click(this.demoqaLocators.desktopDropdown);
  }

  @step("Check notes checkbox")
  async checkNotesCheckbox(): Promise<void> {
    await this.check(this.demoqaLocators.notesCheckbox);
  }

  @step("Verify notes checkbox is checked")
  async verifyNotesCheckboxChecked(): Promise<void> {
    await expect(this.demoqaLocators.notesCheckbox).toBeChecked();
  }

  @step("Verify result contains text")
  async verifyResultContainsText(expectedText: string): Promise<void> {
    await expect(this.demoqaLocators.resultText).toContainText(expectedText);
  }
}
