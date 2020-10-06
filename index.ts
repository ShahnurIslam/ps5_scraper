import {Bot} from "./src/Bot"
import {AmazonUK} from "./src/Crawlers/AmazonUk"

// console.log("hello")
new Bot().start();

const r = new AmazonUK().getStock();

console.log(r)