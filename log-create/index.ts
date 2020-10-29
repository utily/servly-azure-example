import * as servly from "servly"
import * as azure from "servly-azure"

export const handler = servly.Endpoint.create(
	async (context: servly.Context, request: servly.Request): Promise<any> => {
		const body = await request.body
		const name = request.query.name || (body && body.name)
		context.log("initialized", "trace", body)
		const result = name
			? "Hello, " + name + ". This HTTP triggered function executed successfully."
			: "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
		return result
	}
)

export const run = azure.Queue.eject(handler)
