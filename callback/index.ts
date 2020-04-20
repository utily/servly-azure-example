import * as servly from "servly"
import * as azure from "servly-azure"

const handler = servly.Queue.callback()

export const run = azure.Queue.eject(handler)
