import {Logger} from "../Logger"

export abstract class Crawler{

    abstract getRetailerName():string;

    abstract getUrl():string;

    abstract productIsValid(stock:string):Boolean;

    abstract async crawlSite(logger:Logger);

    abstract async getStock(logger:Logger);
    
}