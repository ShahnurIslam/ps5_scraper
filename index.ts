import {Bot} from "./src/Bot"
import {AmazonUK} from "./src/Crawlers/AmazonUk"
import {Logger,LogLevel} from './src/Logger';
require('dotenv').config()
// console.log("hello")
new Bot(new Logger(LogLevel.Info)).start();
