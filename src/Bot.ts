import {Logger,LogLevel} from "./Logger"
import { AmazonUK } from "./Crawlers/AmazonUk"
import { ShopTo } from "./Crawlers/ShopTo"

export class Bot {
    am: AmazonUK
    shopto: ShopTo

    constructor(private readonly logger: Logger){
        this.am = new AmazonUK
        this.shopto = new ShopTo
        
    }

    public async start(){
        this.logger.info("starting bot scraper")
        this.logger.info(`Starting Crawler on site ${this.am.getRetailerName()}`)
        console.log(await this.am.getStock(this.logger))
        this.logger.info(`Starting Crawler on site ${this.shopto.getRetailerName()}`)
        console.log(await this.shopto.getStock(this.logger))
        
    }

}