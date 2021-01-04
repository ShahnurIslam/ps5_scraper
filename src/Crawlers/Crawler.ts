import {Logger} from "../Logger"

export abstract class Crawler{

    abstract getRetailerName():string;

    getUrl():string{
        var urls = require("../../config.json")
        return urls['digital_url'][this.getRetailerName()]
    };

    abstract productIsValid(stock:string):Boolean;

    abstract crawlSite(logger:Logger);

    abstract getStock(logger:Logger);
    
}