import {WebSocket} from "ws";
import {generateRandomString} from "../utils/string";

import pako from 'pako';
import {IncomingMessage} from "node:http";

declare const global: {
	transformer: ReturnType<typeof setInterval>
}

export async function InitialSocketTransformer(client: WebSocket, message: IncomingMessage) {
	let event: any = ()=>{};
	client.send(JSON.stringify({
		dataType: "PENDING"
	}));
	let close: any = ()=>{}
	let n = 0;
	function retry(e = null) {
		n ++;
		if (n > 10) {
			client.send(JSON.stringify({
				dataType: "CLOSED",
				message: "failed to connect origin"
			}))
			client.close();
			return;
		}
		const socket = new WebSocket("wss://ws-market-swap.we-api.com/ws?platformid=41&app_version=4.0.10", {
			headers: {
				...message.headers,
				"Accept-Encoding": "gzip, deflate, br",
				"Accept-Language": "en-US,en;q=0.9",
				"Cache-Control": "no-cache",
				"Connection": "Upgrade",
				"Host": "ws-market-swap.we-api.com",
				"Origin": "https://m.bingx.com",
				"Pragma": "no-cache",
				"Upgrade": "websocket"
			}
		});

		socket.on("open", () => {
			close = ()=>{
				socket.close();
			}
			event = (e: any)=>{
				socket.send(e);
			}
			client.send(JSON.stringify({
				dataType: "ready",
				n
			}))
			n = 0;
		});
		socket.on("message", (e) => {
			const inflator = new pako.Inflate({
				to: "string"
			});
			//@ts-ignore
			inflator.push(e, true);
			client.send(inflator.result);
		});
		socket.on('error', ()=>{

		})
		socket.on("close", retry);
	}
	client.on('close', ()=>{
		close();
	})
	client.on('message', (e)=>{
		event(e);
	})
	retry();
}
