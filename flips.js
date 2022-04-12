import { coinFlips } from "./modules/coin.mjs";
import { createRequire } from "module";
import { countFlips } from "./modules/coin.mjs";

const require = createRequire(import.meta.url);
var args = require('minimist')(process.argv.slice(2));
args['number']

if(args.number == null) {
    var output = coinFlips(1)
    console.log(output)
    console.log(output + " : 1 ")
}
else{
    console.log(countFlips(coinFlips(args.number)))
}