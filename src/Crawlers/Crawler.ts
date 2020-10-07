export abstract class Crawler{

    abstract getRetailerName():string;

    abstract getUrl():string;

    abstract productIsValid(stock:string):Boolean;
    
}