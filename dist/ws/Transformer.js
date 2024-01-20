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
exports.InitialSocketTransformer = void 0;
const ws_1 = require("ws");
const pako_1 = __importDefault(require("pako"));
function InitialSocketTransformer(client, message) {
    return __awaiter(this, void 0, void 0, function* () {
        let event = () => { };
        client.send(JSON.stringify({
            dataType: "PENDING"
        }));
        let close = () => { };
        let n = 0;
        function retry(e = null) {
            n++;
            if (n > 10) {
                client.send(JSON.stringify({
                    dataType: "CLOSED",
                    message: "failed to connect origin"
                }));
                client.close();
                return;
            }
            const socket = new ws_1.WebSocket("wss://ws-market-swap.we-api.com/ws?platformid=41&app_version=4.0.10", {
                headers: Object.assign(Object.assign({}, message.headers), { "Accept-Encoding": "gzip, deflate, br", "Accept-Language": "en-US,en;q=0.9", "Cache-Control": "no-cache", "Connection": "Upgrade", "Host": "ws-market-swap.we-api.com", "Origin": "https://m.bingx.com", "Pragma": "no-cache", "Upgrade": "websocket" })
            });
            socket.on("open", () => {
                close = () => {
                    socket.close();
                };
                event = (e) => {
                    socket.send(e);
                };
                client.send(JSON.stringify({
                    dataType: "ready",
                    n
                }));
                n = 0;
            });
            socket.on("message", (e) => {
                const inflator = new pako_1.default.Inflate({
                    to: "string"
                });
                //@ts-ignore
                inflator.push(e, true);
                client.send(inflator.result);
            });
            socket.on('error', () => {
            });
            socket.on("close", retry);
        }
        client.on('close', () => {
            close();
        });
        client.on('message', (e) => {
            event(e);
        });
        retry();
    });
}
exports.InitialSocketTransformer = InitialSocketTransformer;
