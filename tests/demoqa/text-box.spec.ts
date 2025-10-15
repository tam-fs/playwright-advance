import { test, expect } from '@playwright/test';
import { TextBoxUser } from '../../interfaces/textBoxUser';
import { readJson } from '../../utils/readJson';
import { DemoqaTextBoxPage } from '../../pages/demoqa/demoqa.textbox.page';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('demoqa text box', () => {
  test('Exercise 1: text box test', async ({ page }) => {
    const user = readJson<TextBoxUser>('user-demoqa.json');

    const textBoxPage = new DemoqaTextBoxPage(page);

    // Navigate to text box page
    await textBoxPage.navigateToTextBox();

    // Fill the form
    await textBoxPage.fillTextBoxForm(user);

    // Submit the form
    await textBoxPage.submitForm();

    // Verify form inputs
    await textBoxPage.verifyFormInputs(user);
    await textBoxPage.takeScreenshot('01-text-box-verified');

    // Verify output
    await textBoxPage.verifyOutput(user);
  });
});
