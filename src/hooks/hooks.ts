import { CustomWorld } from './../world/CustomWorld';
import { Before, After, Status,setDefaultTimeout,} from "@cucumber/cucumber";
import {chromium,Browser,Page} from "@playwright/test";
import { LoginPage } from '../pages/LoginPage';
import { BasePage } from '../pages/BasePage';
import { RegisterPage } from '../pages/RegisterPage';
import dotenv from "dotenv";
dotenv.config({
    path: "./env/.env.qa"
});
setDefaultTimeout(60000);
let browser;
Before(async function(this:CustomWorld){
    this.browser = await chromium.launch({headless:false});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    const basePage = new BasePage(this.page);
    this.loginPage = new LoginPage(this.page, basePage);
    this.registerPage = new RegisterPage(this.page, basePage);
});
After(async function(this:CustomWorld,{pickle,result}){
    console.log(result?.status);
    if(result?.status == Status.FAILED){
        const img = await this.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`,type:"png"})
        // await this.attach(img,"image/png");
    }
    await this.page.close();
    await this.browser.close();
})