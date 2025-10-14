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
    await textBoxPage.takeScreenshot('01-text-box-filled');

    // Submit the form
    await textBoxPage.submitForm();
    await textBoxPage.takeScreenshot('02-text-box-submitted');

    // Verify form inputs
    await textBoxPage.verifyFormInputs(user);
    await textBoxPage.takeScreenshot('03-text-box-verified');

    // Verify output
    await textBoxPage.verifyOutput(user);
  });
});
