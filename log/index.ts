import * as servly from "servly"
import * as azure from "servly-azure"

export const handler = servly.Queue.create(async (log: servly.Log, context: servly.Context): Promise<void> => {
  context.log("log", "trace", log)
})

export const run = azure.Queue.eject(handler)
