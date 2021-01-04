import {Logger} from "./Logger"
import { AmazonUK } from "./Crawlers/AmazonUk"
import { ShopTo } from "./Crawlers/ShopTo"
import { Game } from "./Crawlers/Game"
import { Argos } from "./Crawlers/Argos"
import { Crawler } from './Crawlers/Crawler'
import { Email } from './Notifications/Mailer'

export class Bot {
    stock_dict: any
    email: Email
    msg: string

    constructor(private readonly logger: Logger){
        this.stock_dict = {}
        this.email = new Email(logger)
        this.msg = ""
    }

    private async scrape_site(cr:Crawler,prod:string, urls:any){
        this.logger.info(`Starting Crawler on site ${cr.getRetailerName()}`)
        this.stock_dict[prod][cr.getRetailerName()] = await cr.getStock(this.logger,urls[cr.getRetailerName()])
        // // this.msg += '\n' + cr.getRetailerName() + ' has stock at url: ' + cr.getUrl()
        if (this.stock_dict[prod][cr.getRetailerName()] === true){
            if (this.msg == ""){
                this.msg = cr.getRetailerName()  + ' has stock <a href="' + cr.getUrl() + '">here</a><br/>'
            } else {
                this.msg +=  cr.getRetailerName()  + ' has stock <a href="' + cr.getUrl() + '">here</a><br/>'
            }
            
        }
    }

    check_stock(st_dict){
        var filtered = Object.keys(st_dict).reduce(function (filtered, key) {
            if (st_dict[key] === true) filtered[key] = st_dict[key];
            return filtered;
        }, {});
        const len = Object.keys(filtered).length
        return len
    }

    email_notification(st_dict){
        if(this.check_stock(st_dict) > 0){
            var filtered: { [characterName: string]: boolean} = Object.keys(st_dict).reduce(function (filtered, key) {
                if (st_dict[key] === true) filtered[key] = st_dict[key];
                return filtered;
            }, {});

            this.email.main(this.msg)

        } else{
            this.logger.info("No stock anywhere")
        }
    }

    public async start(){
        this.logger.info("Starting bot scraper")
        var prods = require("../config.json")['product']
        for (let k in prods) {
            this.stock_dict[k] = {}
        }
        for(let k in prods) {
            this.logger.info("Scraping for product: ".concat(k))
            await this.scrape_site(new AmazonUK,k,prods[k]['urls'])
            await this.scrape_site(new ShopTo,k,prods[k]['urls'])
            await this.scrape_site(new Argos,k,prods[k]['urls'])
            this.email_notification(this.stock_dict[k])
            // console.log(prods[k]['urls']['Amazon'])
        }

        // this.stock_dict['test'] = true
        console.log(this.stock_dict)
        // this.email_notification(this.stock_dict)
    }

}