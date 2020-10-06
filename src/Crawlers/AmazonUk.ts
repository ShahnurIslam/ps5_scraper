import {} from "../Logger"
import {Product} from "../Model/Product"
const axios = require('axios');
const cheerio = require('cheerio');

export class AmazonUK{

    getRetailerName(): string {
        return 'amazon.co.uk';
      }

    getUrl(item_code):string{
        return "https://www.amazon.co.uk/dp/".concat(item_code,'/')
    }

    productIsValid(stock:string):Boolean{
        return stock.startsWith('Available from')
      }
    
    async crawlSite(item_id:string){
        const prod_url  = this.getUrl(item_id);
        let stock_list = '';
        try {
            const response = await axios.get(prod_url)
            const html = response.data
            const $ = cheerio.load(html)
            stock_list += ($('#availability span').first().text().trim())
        } catch(error){
            console.log("mistake");
        };
        return stock_list
    }

    public async getStock(){
        const stock = await this.crawlSite('B08H95Y452')
        const in_stock = this.productIsValid(stock)
        return in_stock
    }
    }


