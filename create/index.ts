import * as servly from "servly"
import * as azure from "servly-azure"


export const endpoint = servly.Endpoint.create(async request => {
    request.log("HTTP trigger function processed a request.");
    const name = request.query.name || (request.body && (await request.body).name)
    return name ? "Hello, " + name + ". This HTTP triggered function executed successfully."
			: "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
})

export const run = azure.eject(endpoint)