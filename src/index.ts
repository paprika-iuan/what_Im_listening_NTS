/**
 * Welcome to Cloudflare Workers!
 *
 * This is a template for a Scheduled Worker: a Worker that can run on a
 * configurable interval:
 * https://developers.cloudflare.com/workers/platform/triggers/cron-triggers/
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Run `curl "http://localhost:8787/__scheduled?cron=*+*+*+*+*"` to see your Worker in action
 * - Run `npm run deploy` to publish your Worker
 *
 * Bind resources to your Worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { getLatest } from "./get_shows";
import { extractShowData } from "./interfaces";
import { generateBox } from "./box";

export default {

	async fetch(req: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		try {
			const info = extractShowData(await getLatest());

			return new Response(generateBox(info), {
				headers: {
					"Content-Type": "text/html;charset=UTF-8",
				},
			});
		} catch (error) {
			return new Response("Error al cargar el show de NTS", { status: 500 });
		}
	},
} satisfies ExportedHandler<Env>;
