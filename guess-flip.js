import { flipACoin } from "./modules/coin.mjs";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
var args = require('minimist')(process.argv.slice(2));
args['call']

const heads = "heads"
const tails = "tails"


if (args.calls != heads && args.call != tails){
    try{
        throw new Error("No answer")
    } 
    catch(e) {
        console.log("Error: No answer")
        console.log("Usage: node guess-flip --call=[heads|tails]")
    }
}
else{
    console.log(flipACoin(args.call))
}
