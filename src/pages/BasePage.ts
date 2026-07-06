import{Page}from 'playwright';

import{logger}from "../utils/winstonLogger";
export class BasePage{
    constructor(protected page:Page){}
    async click(locator:string){
        logger.info('Clicking:${locator}');
        await this.page.locator(locator).click();
    }
    async fill(locator:string,value:string){
        logger.info(`Filling:${locator}=>{value}`);
        await this.page.locator(locator).fill(value);
    }
}