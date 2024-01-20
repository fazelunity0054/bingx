"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyImage = void 0;
const crypto_data_json_1 = __importDefault(require("../dist/config/crypto_data.json"));
function currencyImage(req, res, n) {
    const url = "http://localhost" + req.url;
    const searchParams = new URL(url).searchParams;
    const symbol = searchParams.get('symbol');
    const crypto = crypto_data_json_1.default.find(d => d.symbol === symbol);
    const imageUrl = `https://s2.coinmarketcap.com/static/img/coins/128x128/${crypto.id}.png`;
    res.writeHead(200, {
        "content-type": "application/json"
    });
    res.write(JSON.stringify({
        url: imageUrl
    }));
    res.end();
}
exports.currencyImage = currencyImage;
