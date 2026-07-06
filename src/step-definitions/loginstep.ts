import{Given, When, Then} from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";
import {chromium, Page, Browser, expect} from "@playwright/test";
import loginData from "../../test-Data/loginData.json";

Given('the user is on Login page of Tutorials Ninja', async function (this:CustomWorld) {
  // Write code here that turns the phrase above into concrete actions
  
  await this.page.goto(process.env.BASE_URL!);
});

When('the user enters the mail and password', async function (this:CustomWorld) {
    await this.loginPage.loginAction();
    await this.loginPage.enteringDetails(loginData.email,loginData.password);
});

When('clicks the login button in the site', async function (this:CustomWorld) {
    await this.loginPage.loginclick();
});

Then('the user should be loggedIn successfully', async function (this:CustomWorld) {
    await expect(this.loginPage.success).toBeVisible();
});