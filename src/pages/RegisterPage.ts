import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage {
    private page: Page;
    private base: BasePage;
    
    private account: string;
    private registerLink: string;
    private firstNameInput: string;
    private lastNameInput: string;
    private emailInput: string;
    private telephoneInput: string;
    private passwordInput: string;
    private confirmPasswordInput: string;
    private privacyPolicyCheckbox: string;
    private continueBtn: string;
    readonly successHeader: Locator;

    constructor(page: Page, base: BasePage) {
        this.page = page;
        this.base = base;
        this.account = ("//span[normalize-space()='My Account']");
        this.registerLink = ("//a[normalize-space()='Register']");
        this.firstNameInput = ("//input[@id='input-firstname']");
        this.lastNameInput = ("//input[@id='input-lastname']");
        this.emailInput = ("//input[@id='input-email']");
        this.telephoneInput = ("//input[@id='input-telephone']");
        this.passwordInput = ("//input[@id='input-password']");
        this.confirmPasswordInput = ("//input[@id='input-confirm']");
        this.privacyPolicyCheckbox = ("//input[@name='agree']");
        this.continueBtn = ("//input[@value='Continue']");
        this.successHeader = page.locator("#content h1");
    }

    async navigateToRegister() {
        await this.base.click(this.account);
        await this.base.click(this.registerLink);
    }

    async enteringPersonalDetails(firstName: string, lastName: string, email: string, telephone: string) {
        await this.base.fill(this.firstNameInput, firstName);
        await this.base.fill(this.lastNameInput, lastName);
        await this.base.fill(this.emailInput, email);
        await this.base.fill(this.telephoneInput, telephone);
    }

    async enteringPasswordDetails(password: string, confirm: string) {
        await this.base.fill(this.passwordInput, password);
        await this.base.fill(this.confirmPasswordInput, confirm);
    }

    async clickContinue() {
        await this.base.click(this.privacyPolicyCheckbox);
        await this.base.click(this.continueBtn);
    }
}