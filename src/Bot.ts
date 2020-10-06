import {Logger,LogLevel} from "./Logger"
import { AmazonUK } from "./Crawlers/AmazonUk"

export class Bot {
    logger: Logger
    am: AmazonUK

    constructor(){
        this.logger = new Logger(LogLevel.Info)
        this.am = new AmazonUK
    }

    public async start(){
        this.logger.info("starting bot scraper")
        console.log(this.am.getRetailerName())
        console.log(await this.am.crawlSite('B08H95Y452'))
        
    }

}