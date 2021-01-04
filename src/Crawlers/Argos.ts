import {Logger} from "../Logger"
import { Crawler } from "./Crawler";
const axios = require('axios');
const cheerio = require('cheerio');

export class Argos extends Crawler {
    getRetailerName(): string {
        return "Argos"
    }
    productIsValid(stock: string): Boolean {
        return !stock.includes("is currently unavailable.")
    }
    async crawlSite(logger:Logger){
        let stock_list = '';
        try {
            const response = await axios.get(this.url,{headers:{
                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:53.0) Gecko/20100101 Firefox/53.0',
                "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8"}})
            const html = response.data
            const $ = cheerio.load(html)
            stock_list += $('#h1title').text().trim() 
            
        } catch(error){
            logger.error(error.message)
        };
        logger.info(`Retailer ${this.getRetailerName()} stock text is returning: ${stock_list}`);
        return stock_list
    }
    public async getStock(logger:Logger,url:string){
        this.url = url
        const stock = await this.crawlSite(logger)
        const in_stock = this.productIsValid(stock)
        return in_stock
    }



}