import {Bot} from "./src/Bot"
import {Logger,LogLevel} from './src/Logger';

function bot(){
    new Bot(new Logger(LogLevel.Info)).start()
};

exports.runBot = bot;

bot()