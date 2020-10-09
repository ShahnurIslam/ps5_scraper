import {Logger,LogLevel} from "./Logger"
import { AmazonUK } from "./Crawlers/AmazonUk"
import { ShopTo } from "./Crawlers/ShopTo"
import { Game } from "./Crawlers/Game"
import { Crawler } from './Crawlers/Crawler'

export class Bot {
    am: AmazonUK
    shopto: ShopTo
    game: Game
    stock_dict: any

    constructor(private readonly logger: Logger){
        this.am = new AmazonUK
        this.shopto = new ShopTo
        this.game = new Game
        this.stock_dict = {}
    }

    private async scrape_site(cr:Crawler){
        this.logger.info(`Starting Crawler on site ${cr.getRetailerName()}`)
        this.stock_dict[cr.getRetailerName()] = await cr.getStock(this.logger)
    }

    public async start(){
        // let stock = []
        var stock_d = {}
        // this.logger.info("Starting bot scraper")
        // this.scrape_site(this.am)
        // this.scrape_site(this.shopto)
        // this.scrape_site(this.game)
        this.logger.info(`Starting Crawler on site ${this.am.getRetailerName()}`)
        stock_d[this.am.getRetailerName()] = await this.am.getStock(this.logger)
        this.logger.info(`Starting Crawler on site ${this.shopto.getRetailerName()}`)
        stock_d[this.shopto.getRetailerName()] = await this.shopto.getStock(this.logger)
        this.logger.info(`Starting Crawler on site ${this.game.getRetailerName()}`)
        stock_d[this.game.getRetailerName()] = await this.game.getStock(this.logger)

        console.log(stock_d)
    }

}