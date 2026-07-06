import { logger } from './../utils/winstonLogger';
import {Browser, BrowserContext, Page} from "playwright";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from '../pages/RegisterPage';

export class CustomWorld{
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    loginPage!:LoginPage;
    registerPage!: RegisterPage;
    logger = logger;
}