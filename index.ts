import {Bot} from "./src/Bot"
import {Logger,LogLevel} from './src/Logger';

export function bot(){
    new Bot(new Logger(LogLevel.Info)).start()
};

exports.runBot = bot;

