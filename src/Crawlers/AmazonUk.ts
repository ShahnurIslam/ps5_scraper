import {Logger} from "../Logger"
import { Crawler } from "./Crawler";
const axios = require('axios');
const cheerio = require('cheerio');

export class AmazonUK extends Crawler{

    getRetailerName(): string {
        return 'Amazon';
      }

    productIsValid(stock:string):Boolean{
        return stock.startsWith('Available from')
      }
    
    async crawlSite(logger:Logger){
        const prod_url  = this.getUrl();
        let stock_list = '';
        try {
            const response = await axios.get(prod_url, {headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:53.0) Gecko/20100101 Firefox/53.0'}})
            const html = response.data
            const $ = cheerio.load(html)
            stock_list += ($('#availability span').first().text().trim())
            logger.info(`Retailer ${this.getRetailerName()} stock text is returning: ${stock_list}`)
        } catch(error){
            logger.error(error.message);
            
        };
        
        return stock_list
    }

    public async getStock(logger:Logger){
        const stock = await this.crawlSite(logger)
        const in_stock = this.productIsValid(stock)
        return in_stock
    }
    }



