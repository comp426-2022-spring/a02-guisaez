import { coinFlips } from "./modules/coin.mjs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
var args = require('minimist')(process.argv.slice(2));
args['number']

if(args.number == null) {
    console.log(coinFlips(1));
}
else{
    console.log(coinFlips(args.number))
}