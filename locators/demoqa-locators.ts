import { Locator, Page } from "@playwright/test";
import { CommonLocators } from "./common-locators";

export class DemoqaLocators extends CommonLocators {
    textBoxFullNameInput!: Locator;
    textBoxEmailInput!: Locator;
    textBoxCurrentAddressInput!: Locator;
    textBoxPermanentAddressInput!: Locator;
    textBoxSubmitButton!: Locator;
    outputName!: Locator;
    outputEmail!: Locator;
    outputCurrentAddress!: Locator;
    outputPermanentAddress!: Locator;
    doubleClickBtn!: Locator;
    rightClickBtn!: Locator;
    clickMeBtn!: Locator;
    doubleClickMessage!: Locator;
    rightClickMessage!: Locator;
    dynamicClickMessage!: Locator;
    homeDropdown!: Locator;
    desktopDropdown!: Locator;
    notesCheckbox!: Locator;
    resultText!: Locator;

    constructor(page: Page) {
        super(page);
        this.initializeLocators();
    }
    
    
    protected initializeLocators(): void {
        super.initializeLocators(); // ← Thêm dòng này
        this.textBoxFullNameInput = this.page.locator('//input[@id="userName"]');
        this.textBoxEmailInput = this.page.locator('//input[@id="userEmail"]');
        this.textBoxCurrentAddressInput = this.page.locator('//textarea[@id="currentAddress"]');
        this.textBoxPermanentAddressInput = this.page.locator('//textarea[@id="permanentAddress"]');
        this.textBoxSubmitButton = this.page.locator('//button[@id="submit"]');
        this.outputName = this.page.locator('//p[@id="name"]');
        this.outputEmail = this.page.locator('//p[@id="email"]');
        this.outputCurrentAddress = this.page.locator('//p[@id="currentAddress"]');
        this.outputPermanentAddress = this.page.locator('//p[@id="permanentAddress"]');
        this.doubleClickBtn = this.page.locator('//button[@id="doubleClickBtn"]');
        this.rightClickBtn = this.page.locator('//button[@id="rightClickBtn"]');
        this.clickMeBtn = this.page.locator('//button[text()="Click Me"]');
        this.doubleClickMessage = this.page.locator('//p[@id="doubleClickMessage"]');
        this.rightClickMessage = this.page.locator('//p[@id="rightClickMessage"]');
        this.dynamicClickMessage = this.page.locator('//p[@id="dynamicClickMessage"]');
        this.homeDropdown = this.page.locator("//button[@title='Toggle']");
        this.desktopDropdown = this.page.locator('//span[text()="Desktop"]//ancestor::span//button');
        this.notesCheckbox = this.page.locator('//input[@id="tree-node-notes"]/following-sibling::span[@class="rct-checkbox"]');
        this.resultText = this.page.locator('//div[@id="result"]');
    }

}
