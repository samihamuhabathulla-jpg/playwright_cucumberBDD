import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage{
    private page:Page;
    private base:BasePage
    private account:string;
    private login:string;
    private email:string;
    private pass:string;
    private loginbtn:string;
    readonly success:Locator;

    constructor(page:Page,base:BasePage){
        this.page = page;
        this.base = base;
        this.account = ("//span[normalize-space()='My Account']");
        this.login = ("//a[normalize-space()='Login']");
        this.email = ("//input[@id='input-email']");
        this.pass = ("//input[@id='input-password']");
        this.loginbtn = ("//input[@value='Login']");
        this.success = page.locator("#content > h2:nth-child(1)")
        
    }
    async loginAction(){
        await this.base.click(this.account);
        await this.base.click(this.login);
    }
    async enteringDetails(mail:string,password:string){
        await this.base.fill(this.email,mail);
        await this.base.fill(this.pass,password);
    }
    async loginclick(){
        await this.base.click(this.loginbtn);
    }
}