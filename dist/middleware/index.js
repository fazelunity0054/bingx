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
const { forceFetch } = require("./fetcher");
/**
 *
 * @param req {Request}
 * @param res {Response}
 * @param next {NextFunction}
 */
function middleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const content = yield getContent(req);
        res.write(content);
        res.end();
    });
}
function optimize(buffer) {
    const textDecoder = new TextDecoder('utf-8');
    const text = textDecoder.decode(new Uint8Array(buffer));
    let regex = /(https?)?:?\/\/([^\/]+)\/(.*)/g;
    let replacedString = text;
    let match;
    while ((match = regex.exec(text)) !== null) {
        let [fullMatch, protocol, domain, path] = match;
        protocol = protocol || "http"; // default to "http" if no protocol is provided
        let replacement = "http://localhost:3000";
        replacedString = replacedString.replaceAll(protocol + `://${domain}`, replacement);
    }
    return replacedString;
}
/**
 *
 * @param req {Request}
 *
 * @return {Promise<ArrayBuffer>}
 */
function getContent(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetch = yield forceFetch(req.path, req);
        const shouldFilterPath = ['html', 'js', 'javascript', 'stylesheet', 'text', 'plain'];
        let buffer = yield fetch.arrayBuffer();
        if (shouldFilterPath.find(p => fetch.headers.get('content-type').includes(p))) {
            buffer = optimize(buffer);
        }
        return buffer;
    });
}
module.exports = middleware;
