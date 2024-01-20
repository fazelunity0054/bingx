import {forceFetch} from "../middleware/fetcher";
import {ServerResponse} from "node:http";
import data from "../dist/config/crypto_data.json"



export function currencyImage(req: Request, res: ServerResponse, n: any) {
	const url = "http://localhost"+req.url;
	const searchParams = new URL(url).searchParams;
	const symbol = searchParams.get('symbol');
	const crypto = (data as any[]).find(d => d.symbol === symbol);
	const imageUrl = `https://s2.coinmarketcap.com/static/img/coins/128x128/${crypto.id}.png`;
	res.writeHead(200, {
		"content-type": "application/json"
	})
	res.write(JSON.stringify({
		url: imageUrl
	}));
	res.end()

}
