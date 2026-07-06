import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";
import loginData from "../../test-Data/loginData.json";

Given('the user is on Login page of Tutorials Ninja', async function (this: CustomWorld) {
    await this.page.goto(process.env.BASE_URL!);
});

// VALID LOGIN 

When('the user enters the mail and password', async function (this: CustomWorld) {
    await this.loginPage.loginAction();
    await this.loginPage.enteringDetails(
        loginData.email,
        loginData.password
    );
});

When('clicks the login button in the site', async function (this: CustomWorld) {
    await this.loginPage.loginclick();
});

Then('the user should be loggedIn successfully', async function (this: CustomWorld) {
    await expect(this.loginPage.success).toBeVisible();
});

// INVALID LOGIN 

When('user enters email as {string} and {string}',async function (this: CustomWorld, email: string, password: string) {
        await this.loginPage.loginAction();
        await this.loginPage.enteringDetails(email, password);
    });

When('user clicks the login button', async function (this: CustomWorld) {
    await this.loginPage.loginclick();
});

Then('popup {string} should be displayed successfully',async function (this: CustomWorld, errorMessage: string) {
        await expect(this.loginPage.errorMessage).toHaveText(errorMessage);
    }
);