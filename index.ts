import {Bot} from "./src/Bot"
import {Logger,LogLevel} from './src/Logger';

// Start our Bot
// new Bot(new Logger(LogLevel.Info)).start();




function bot(){
    new Bot(new Logger(LogLevel.Info)).start()
};

exports.runBot = bot;