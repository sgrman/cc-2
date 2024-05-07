/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		
	console.log("Logging: " + request.url)
	
	//My Lookuptable
	const randomresponse = {

		1: "Would you like a cheeseburger?",
		2: "Would you like a salad?",
		3: "Would you like a cold beverage?",
		4: "Would you like another round?",
	};

	function getRandomIntInclusive(min, max) {
		const minCeiled = Math.ceil(min);
		const maxFloored = Math.floor(max);
		return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
	  }
	  
	const ResponseNumber = getRandomIntInclusive(1,4);
	const responsemap = randomresponse[ResponseNumber];

	return new Response (responsemap);
	
	}}
