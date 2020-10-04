import {Logger,LogLevel} from "./Logger"

export class Bot {
    logger: Logger

    constructor(){
        this.logger = new Logger(LogLevel.Info)
    }

    public start(){
        this.logger.info("starting bot scraper")
    }

}