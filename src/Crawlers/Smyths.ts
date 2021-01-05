import {Crawler} from "./Crawler"
import {Logger} from "../Logger"

const axios = require('axios');
const cheerio = require('cheerio');

export class Smyths extends Crawler{
    getRetailerName(): string {
        return "Smyths"
    }
    productIsValid(stock: string): Boolean {
        return stock == "inStock"
    }
    async crawlSite(logger: Logger) {
        let stock_list = '';
        try {
            const response = await axios.get(this.url,{headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:53.0) Gecko/20100101 Firefox/53.0'}})
            const html = response.data
            const $ = cheerio.load(html)
            const clean_string = $('span[name=js-stockStatusCode]').html()
            stock_list += clean_string
        } catch(error){
            logger.error(error.message);
        };
        logger.info(`Retailer ${this.getRetailerName()} stock text is returning: ${stock_list}`);
        return stock_list
    }
    public async getStock(logger: Logger, url: string) {
        this.url = url
        const stock = await this.crawlSite(logger)
        const in_stock = this.productIsValid(stock)
        return in_stock
    }




}