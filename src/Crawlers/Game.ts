import {Crawler} from "./Crawler"
import {Logger,LogLevel} from "../Logger"

const axios = require('axios');
const cheerio = require('cheerio');


export class Game extends Crawler{
    getRetailerName(): string {
        return "Game"
    }
    getUrl(): string {
        return "https://www.game.co.uk/en/playstation-5-console-2826338"
    }
    productIsValid(stock: string): Boolean {
        return !stock.startsWith("Sorry, this product is currently out of stock, but might be available in store")
    }

    async crawlSite(logger:Logger){
        const prod_url  = this.getUrl();
        let stock_list = '';
        try {
            const response = await axios.get(prod_url)
            const html = response.data
            const $ = cheerio.load(html)
            stock_list += $('.section.buyingOptions.stacked').text().trim() 
            
        } catch(error){
            logger.error(error.message)
        };
        logger.info(`Retailer ${this.getRetailerName()} stock text is returning: ${stock_list}`);
        return stock_list
    }
    public async getStock(logger:Logger){
        const stock = await this.crawlSite(logger)
        const in_stock = this.productIsValid(stock)
        return in_stock
    }
}
