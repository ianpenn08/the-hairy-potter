

import { usePotteries } from "./potteryProvider.js";
import { Pottery } from "./pottery.js";

const contentTarget = document.querySelector(".potteryContainer")


const render = (allPotteries) => {
    contentTarget.innerHTML = allPotteries.map(
        (potteryObject) => {
            
     
        
            return Pottery(potteryObject)

    }).join("")
}
export const PotteryList = () => {
    const allPotteries = usePotteries()
    render(allPotteries)
}