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
        this.logger.info(`Starting Crawler on site ${this.am.getRetailerName()}`)
        console.log(await this.am.getStock())
        
    }

}