import {Logger} from "../Logger"

var config = require('../../config.json')
export abstract class Crawler{

    abstract getRetailerName():string;

    abstract getUrl():string;

    abstract productIsValid(stock:string):Boolean;

    abstract async crawlSite(logger:Logger);

    abstract async getStock(logger:Logger);
    
}