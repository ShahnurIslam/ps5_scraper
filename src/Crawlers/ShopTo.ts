import {Crawler} from "./Crawler"
import {Logger} from "../Logger"

const axios = require('axios');
const cheerio = require('cheerio');

export class ShopTo extends Crawler{
    getRetailerName(): string {
        return "ShopTo";
    }
    getUrl(): string {
        return "https://www.shopto.net/en/ps5hw01-playstation-5-console-p191472/";
    }
    productIsValid(stock:string): Boolean {
        return !stock.startsWith("Sold out")
    }

    split_text(str:string){
        const lg = str.length /2
        return(str.substr(0,lg))
    }

    private async crawlSite(logger:Logger){
        const prod_url  = this.getUrl();
        let stock_list = '';
        try {
            const response = await axios.get(prod_url)
            const html = response.data
            const $ = cheerio.load(html)
            stock_list += this.split_text($('.inventory.orderbox_inventory.not_available p','#itemcard_order_button_form_std').text().trim())
        } catch(error){
            logger.error(error.message);
        };
        return stock_list
    }

    public async getStock(logger:Logger){
        const stock = await this.crawlSite(logger)
        const inStock = this.productIsValid(stock)
        return inStock
    }
    

}