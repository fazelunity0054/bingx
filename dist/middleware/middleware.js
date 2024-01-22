"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = exports.middleware = void 0;
const fetcher_1 = require("./fetcher");
const Faker_1 = __importDefault(require("../config/Faker"));
function middleware(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const originUrl = req.url;
        let url = new URL(originUrl.startsWith("http") ? originUrl : Faker_1.default.url + originUrl);
        if (!originUrl.startsWith("fake") && !url.toString().includes("bing")) {
            console.log("IGNORED", url.toString());
            res.end();
            return;
        }
        url.pathname = url.pathname.replace("/fake", "");
        if (url.pathname === "/") {
            url.pathname = "/en-us/contract/SWAP/SFP-USDT";
        }
        if (url.pathname.startsWith("/fetch")) {
            const params = url.pathname.split("/").slice(2);
            console.log("PARAMS", params);
            url = new URL(`${params[0]}://${params[1]}/${params.slice(2).join("/")}`);
        }
        const scrapUrl = url.toString();
        console.log(scrapUrl);
        const scrap = yield (0, fetcher_1.forceFetch)(scrapUrl, Object.assign(Object.assign({}, req), { headers: req.headers, body: req.method === "GET" ? undefined : req.body }));
        if (!scrap) {
            res.writeHead(400);
            res.end();
            return;
        }
        const filtered = yield filter(scrap);
        let headers = {};
        (_b = (_a = filtered === null || filtered === void 0 ? void 0 : filtered.headers) === null || _a === void 0 ? void 0 : _a.forEach) === null || _b === void 0 ? void 0 : _b.call(_a, (v, k) => {
            if (k === "content-encoding")
                return;
            if (k === "content-security-policy")
                v = 'default-src \'self\' blob:;img-src https: *.google-analytics.com \'self\' * data: blob:;style-src \'self\' https: \'unsafe-inline\';script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' blob: *.bb-os.com localhost:3000 *.webpushs.com *.legendtrading.com *.sendpulse.com *.bing.com *.googletagmanager.com static.zdassets.com *.google-analytics.com ajax.cloudflare.com *.geetest.com *.qbox.me *.zopim.com *.tradingview.com *.twitter.com *.ads-twitter.com *.recaptcha.net *.google.com *.facebook.net *.facebook.com *.gstatic.com *.doubleclick.net *.googleadservices.com *.volccdn.com *.ibytedtos.com fpnpmcdn.net fpcdn.io *.prdredir.com *.geevisit.com *.mql5.com *.taboola.com *.ads-twitter.com *.yandex.ru;script-src-elem \'self\' \'unsafe-inline\' *;connect-src \'self\' \'unsafe-inline\' * data: blob: *.fptls.com api.fpjs.io *.api.fpjs.io fp.bingx.com localhost:3000;form-action \'self\' *.facebook.com *.facebook.net *.advcash.com *.mrcr.io *.mercuryo.io;frame-src \'self\' * blob:;object-src \'none\';font-src \'self\' * data:;media-src \'self\' *;manifest-src \'self\' \'unsafe-inline\' \'unsafe-eval\';worker-src * blob:;child-src * blob:';
            headers[k] = v.replace("bingx.com", 'localhost').replace("HttpOnly;", "").replace("Secure;", "").replace("SameSite=None", "");
        });
        console.log(headers);
        res.writeHead(200, headers);
        res.write(filtered.buffer);
        res.end();
    });
}
exports.middleware = middleware;
const filters = [
    {
        headers: {
            "content-type": ['text', 'js', 'javascript']
        },
        handle(buffer) {
            let inputString = buffer.toString();
            let regex = /(https?)?:?\/\/([^\/]+)\//g;
            let replacedString = inputString;
            let match;
            while ((match = regex.exec(inputString)) !== null) {
                let [fullMatch, protocol, domain, path] = match;
                protocol = protocol || "http"; // default to "http" if no protocol is provided
                let replacement = `http://localhost:3000/fake/fetch/${protocol}/${domain}`;
                replacedString = replacedString.replace(`${protocol}://${domain}`, replacement);
            }
            replacedString = replacedString.replace("api-app.qq-os.com", "localhost:3000/fake/fetch/https/api-app.qq-os.com");
            replacedString = replacedString.replace("https://localhost", "http://localhost");
            return Buffer.from(replacedString);
        }
    }
];
function filter(response) {
    return __awaiter(this, void 0, void 0, function* () {
        const cloned = response.clone();
        const buffer = Buffer.from(yield response.arrayBuffer());
        const filter = filters.find((f) => {
            var _a;
            const findHeaders = f.headers;
            for (let key in findHeaders) {
                const array = findHeaders[key];
                for (let search of array) {
                    if ((_a = response.headers.get(key)) === null || _a === void 0 ? void 0 : _a.includes(search))
                        return true;
                }
            }
            return false;
        });
        const finalBuffer = filter ? filter.handle(buffer) : buffer;
        return {
            headers: cloned.headers,
            buffer: finalBuffer
        };
    });
}
exports.filter = filter;
