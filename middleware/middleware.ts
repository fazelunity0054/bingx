import {ServerResponse} from "node:http";
import {forceFetch} from "./fetcher";
import Faker from "../config/Faker";

export async function middleware(req: Request, res: ServerResponse) {
	const originUrl = req.url;
	let url = new URL(originUrl.startsWith("http") ? originUrl:Faker.url+originUrl);
	if (!originUrl.startsWith("fake") && !url.toString().includes("bing")) {
		console.log("IGNORED",url.toString());
		res.end();
		return;
	}
	url.pathname = url.pathname.replace("/fake", "");
	console.log("INCOMING", url.pathname);
	if (url.pathname === "/") {
		url.pathname ="/en-us/h5/swapCalculator"
		url.search = "?symbol=BTC-USDT&fiatRate=0.998955189074141&fiatSymbol=%24"
	}
	if (url.pathname.startsWith("/fetch")) {
		const params = url.pathname.split("/").slice(2);
		let s = url.search;
		url =  new URL(`${params[0]}://${params[1]}/${params.slice(2).join("/")}`)
		url.search = s;
	}

	const scrapUrl = url.toString();
	console.log("scrap url ",scrapUrl);
	const _headers = {
		...req.headers,
		host: url.host,
		referer: url.toString()
	};
	console.log(scrapUrl,_headers);
	const scrap = await forceFetch(scrapUrl, {
		...req,
		headers: _headers,
		body: req.method === "GET" ? undefined:req.body
	});
	if (!scrap) {
		res.writeHead(400);
		res.end();
		return;
	}

	const filtered = await filter(scrap);
	let headers: any = {};
	filtered?.headers?.forEach?.((v,k)=>{
		if (k === "content-encoding") return;
		if (k === "content-security-policy") v= 'default-src \'self\' blob:;img-src https: *.google-analytics.com \'self\' * data: blob:;style-src \'self\' https: \'unsafe-inline\';script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' blob: *.bb-os.com localhost:3000 *.webpushs.com *.legendtrading.com *.sendpulse.com *.bing.com *.googletagmanager.com static.zdassets.com *.google-analytics.com ajax.cloudflare.com *.geetest.com *.qbox.me *.zopim.com *.tradingview.com *.twitter.com *.ads-twitter.com *.recaptcha.net *.google.com *.facebook.net *.facebook.com *.gstatic.com *.doubleclick.net *.googleadservices.com *.volccdn.com *.ibytedtos.com fpnpmcdn.net fpcdn.io *.prdredir.com *.geevisit.com *.mql5.com *.taboola.com *.ads-twitter.com *.yandex.ru;script-src-elem \'self\' \'unsafe-inline\' *;connect-src \'self\' \'unsafe-inline\' * data: blob: *.fptls.com api.fpjs.io *.api.fpjs.io fp.bingx.com localhost:3000;form-action \'self\' *.facebook.com *.facebook.net *.advcash.com *.mrcr.io *.mercuryo.io;frame-src \'self\' * blob:;object-src \'none\';font-src \'self\' * data:;media-src \'self\' *;manifest-src \'self\' \'unsafe-inline\' \'unsafe-eval\';worker-src * blob:;child-src * blob:'
		headers[k] = v.replace("qq-os.com",'localhost').replace("bingx.com",'localhost').replace("HttpOnly;", "").replace("Secure;", "").replace("SameSite=None","");
	})

	res.writeHead(200, {
		...headers,
		"access-control-allow-origin": "*",
		"access-control-allow-headers": "*",
		"access-control-request-headers": "*"
	});
	res.write(filtered.buffer)
	res.end();
}

const filters = [
	{
		headers: {
			"content-type": ['text','js','javascript']
		},
		handle(buffer) {
			let inputString = buffer.toString();
			let regex = /(https?)?:?\/\/([^\/]+)\//g;

			let replacedString = inputString;

			let match: any;
			while ((match = regex.exec(inputString)) !== null) {
				let [fullMatch, protocol, domain, path] = match;
				protocol = protocol || "http"; // default to "http" if no protocol is provided
				let replacement = `http://localhost:3000/fake/fetch/${protocol}/${domain}`;
				replacedString = replacedString.replace(`${protocol}://${domain}`, replacement);
			}
			replacedString = replacedString.replaceAll("api-app.qq-os.com", "localhost:3000/fake/fetch/https/api-app.qq-os.com")
			replacedString = replacedString.replaceAll("api-base.bingx.io", "localhost:3000/fake/fetch/https/api-base.bingx.io")
			replacedString = replacedString.replaceAll("https://localhost", "http://localhost")
			replacedString = replacedString.replaceAll("/fetch/https/", "/fetch/ht_tps/")
			replacedString = replacedString.replaceAll("https", "http")
			replacedString = replacedString.replaceAll("/fetch/ht_tps/", "/fetch/https/")
			replacedString = replacedString.replaceAll("/en-us/h5/swapCalculator", "/fake")

			return Buffer.from(replacedString);
		}
	}
] as {
	handle: (b: Buffer) => Buffer
	[key: string | symbol]: {

	}
}[]

export async function filter(response: Response) {
	const cloned = response.clone();
	const buffer = Buffer.from(await response.arrayBuffer());
	const filter = filters.find((f) => {
		const findHeaders: any  =f.headers
		for (let key in findHeaders) {
			const array = findHeaders[key] as string[];
			for (let search of array) {
				if (response.headers.get(key)?.includes(search)) return true;
			}
		}
		return false;
	})
	const finalBuffer = filter ? filter.handle(buffer):buffer;
	return {
		headers: cloned.headers,
		buffer: finalBuffer
	};
}
