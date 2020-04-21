import * as servly from "servly"
import * as azure from "servly-azure"

const handler: servly.Timer = async context => {
	var timeStamp = new Date().toISOString()
	context.log("triggered", "trace", timeStamp)
}

export const run = azure.Timer.eject(handler)
