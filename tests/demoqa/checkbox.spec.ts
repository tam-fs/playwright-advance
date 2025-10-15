import { test, expect } from '@playwright/test';
import { DemoqaCheckboxPage } from '../../pages/demoqa/demoqa.checkbox.page';

test.describe('demoqa checkbox', () => {
  test('Execise 3: click checkbox test', async ({ page }) => {
    const checkboxPage = new DemoqaCheckboxPage(page);

    // Navigate to checkbox page
    await checkboxPage.navigateToCheckbox();

    // Expand home dropdown
    await checkboxPage.expandHomeDropdown();

    // Expand desktop dropdown
    await checkboxPage.expandDesktopDropdown();

    // Check notes checkbox
    await checkboxPage.checkNotesCheckbox();

    // Verify notes checkbox is checked
    await checkboxPage.verifyNotesCheckboxChecked();
    await checkboxPage.takeScreenshot('03-notes-verified');

    // Verify result contains notes
    await checkboxPage.verifyResultContainsText('notes');
  });
});