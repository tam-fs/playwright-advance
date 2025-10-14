import { test, expect } from '@playwright/test';
import { DemoqaCheckboxPage } from '../../pages/demoqa/demoqa.checkbox.page';

test.describe('demoqa checkbox', () => {
  test('Execise 3: click checkbox test', async ({ page }) => {
    const checkboxPage = new DemoqaCheckboxPage(page);

    // Navigate to checkbox page
    await checkboxPage.navigateToCheckbox();
    await checkboxPage.takeScreenshot('01-checkbox-page-loaded');

    // Expand home dropdown
    await checkboxPage.expandHomeDropdown();
    await checkboxPage.takeScreenshot('02-home-expanded');

    // Expand desktop dropdown
    await checkboxPage.expandDesktopDropdown();
    await checkboxPage.takeScreenshot('03-desktop-expanded');

    // Check notes checkbox
    await checkboxPage.checkNotesCheckbox();
    await checkboxPage.takeScreenshot('04-notes-checked');

    // Verify notes checkbox is checked
    await checkboxPage.verifyNotesCheckboxChecked();
    await checkboxPage.takeScreenshot('05-notes-verified');

    // Verify result contains notes
    await checkboxPage.verifyResultContainsText('notes');
  });
});