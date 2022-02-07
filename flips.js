import { coinFlips } from "./modules/coin.mjs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
var args = require('minimist')(process.argv.slice(2));
args['number']

console.log(coinFlips(args.number))