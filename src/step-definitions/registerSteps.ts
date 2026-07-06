import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../world/CustomWorld";

Given('the user is on register page', async function (this: CustomWorld) {

    await this.page.goto(process.env.BASE_URL!);
    await this.registerPage.navigateToRegister();

});

When('the user enters personal details', async function (this: CustomWorld, dataTable: DataTable) {
    const [data] = dataTable.hashes();
    const uniqueEmail = `samiha${Date.now()}@gmail.com`;
    await this.registerPage.enteringPersonalDetails(
        data.firstname,
        data.lastname,
        uniqueEmail,
        data.telephone
    );

});

When('the user enters password details', async function (this: CustomWorld, dataTable: DataTable) {
    const [data] = dataTable.hashes();
    await this.registerPage.enteringPasswordDetails(
        data.password,
        data.confirmPassword
    );

});

When('clicks the continue button', async function (this: CustomWorld) {

    await this.registerPage.clickContinue();

});

Then('the user should be redirected to the page successfully', async function (this: CustomWorld) {

    await expect(this.registerPage.successHeader).toContainText("Your Account Has Been Created!");

});