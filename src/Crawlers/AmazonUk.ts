import {Logger} from "../Logger"
const axios = require('axios');
const cheerio = require('cheerio');

export class AmazonUK{

    getRetailerName(): string {
        return 'amazon.co.uk';
      }

    getUrl():string{
        return "https://www.amazon.co.uk/dp/B08H95Y452/"
    }

    productIsValid(stock:string):Boolean{
        return stock.startsWith('Available from')
      }
    
    async crawlSite(logger:Logger){
        const prod_url  = this.getUrl();
        let stock_list = '';
        try {
            const response = await axios.get(prod_url)
            const html = response.data
            const $ = cheerio.load(html)
            stock_list += ($('#availability span').first().text().trim())
        } catch(error){
            logger.error(error.message);
            
        };
        logger.info(`Retailer ${this.getRetailerName()} stock text is returning: ${stock_list}`)
        return stock_list
    }

    public async getStock(logger:Logger){
        const stock = await this.crawlSite(logger)
        const in_stock = this.productIsValid(stock)
        return in_stock
    }
    }



