import {Logger} from "../Logger"

export abstract class Crawler{

    abstract getRetailerName():string;

    getUrl():string{
        var urls = require("../../config.json")
        return urls['url'][this.getRetailerName()]
    };

    abstract productIsValid(stock:string):Boolean;

    abstract async crawlSite(logger:Logger);

    abstract async getStock(logger:Logger);
    
}