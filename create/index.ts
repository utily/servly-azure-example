import * as servly from "servly"
import * as azure from "servly-azure"

export const endpoint = servly.Endpoint.create(async (request, context) => {
	context.log("initialized", "trace", request.url)
	context.callback({ url: "https://ptsv2.com/t/servly/post", method: "POST", header: { contentType: "x-www-form-urlencoded" }, body: "name=test" })
	const name = request.query.name || (request.body && (await request.body).name)
	return name ? "Hello, " + name + ". This HTTP triggered function executed successfully."
		: "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
})

export const run = azure.eject(endpoint)