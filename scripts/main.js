import { getPotteries } from "./potteryProvider.js";
import { PotteryList } from "./potteryList.js";

getPotteries()
.then(PotteryList)