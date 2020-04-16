import * as servly from "servly"
import * as azure from "servly-azure"

const handler: servly.Timer = async () => {
    var timeStamp = new Date().toISOString()
    console.log('Timer trigger function ran!', timeStamp)
}

export const run = azure.Timer.eject(handler)
