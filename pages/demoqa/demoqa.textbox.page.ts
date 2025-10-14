import { Page, expect } from "@playwright/test";
import { CommonPage } from "../common-pages";
import { DemoqaLocators } from "../../locators/demoqa-locators";
import { step } from "../../utils/logging";
import { TextBoxUser } from "../../interfaces/textBoxUser";
import { DEMOQA_TEXT_BOX_URL } from "../../constants";

export class DemoqaTextBoxPage extends CommonPage {
  readonly demoqaLocators: DemoqaLocators;

  constructor(page: Page) {
    super(page);
    this.demoqaLocators = new DemoqaLocators(page);
  }

  @step("Navigate to Text Box page")
  async navigateToTextBox(): Promise<void> {
    await this.navigate(DEMOQA_TEXT_BOX_URL);
  }

  @step("Fill text box form with user data")
  async fillTextBoxForm(user: TextBoxUser): Promise<void> {
    await this.fill(this.demoqaLocators.textBoxFullNameInput, user.fullName);
    await this.fill(this.demoqaLocators.textBoxEmailInput, user.email);
    await this.fill(this.demoqaLocators.textBoxCurrentAddressInput, user.currentAddress);
    await this.fill(this.demoqaLocators.textBoxPermanentAddressInput, user.permanentAddress);
  }

  @step("Submit text box form")
  async submitForm(): Promise<void> {
    await this.click(this.demoqaLocators.textBoxSubmitButton);
  }

  @step("Verify text box form input values")
  async verifyFormInputs(user: TextBoxUser): Promise<void> {
    await expect(this.demoqaLocators.textBoxFullNameInput).toHaveValue(user.fullName);
    await expect(this.demoqaLocators.textBoxEmailInput).toHaveValue(user.email);
    await expect(this.demoqaLocators.textBoxCurrentAddressInput).toHaveValue(user.currentAddress);
    await expect(this.demoqaLocators.textBoxPermanentAddressInput).toHaveValue(user.permanentAddress);
  }

  @step("Verify text box output")
  async verifyOutput(user: TextBoxUser): Promise<void> {
    await expect(this.demoqaLocators.outputName).toContainText(user.fullName);
    await expect(this.demoqaLocators.outputEmail).toContainText(user.email);
    await expect(this.demoqaLocators.outputCurrentAddress).toContainText(user.currentAddress);
    await expect(this.demoqaLocators.outputPermanentAddress).toContainText(user.permanentAddress);
  }
}
