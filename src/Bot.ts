import {Logger,LogLevel} from "./Logger"
import { AmazonUK } from "./Crawlers/AmazonUk"
import { ShopTo } from "./Crawlers/ShopTo"
import { Game } from "./Crawlers/Game"
import { Crawler } from './Crawlers/Crawler'
import { Email } from './Notifications/Mailer'

export class Bot {
    stock_dict: any
    email: Email

    constructor(private readonly logger: Logger){
        this.stock_dict = {}
        this.email = new Email
    }

    private async scrape_site(cr:Crawler){
        this.logger.info(`Starting Crawler on site ${cr.getRetailerName()}`)
        this.stock_dict[cr.getRetailerName()] = await cr.getStock(this.logger)
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
            console.log(filtered)
            this.email.main("Testing")
        } else{
            this.logger.info("No stock anywhere")
        }
    }

    public async start(){
        this.logger.info("Starting bot scraper")
        await this.scrape_site(new AmazonUK)
        await this.scrape_site(new ShopTo)
        await this.scrape_site(new Game)
        // this.stock_dict['test'] = true
        console.log(this.stock_dict)
        this.email_notification(this.stock_dict)

        // this.email.main("testing")
        
    }

}