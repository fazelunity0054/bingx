"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function axiosFetch(url, options = {}) {
    const { method = 'GET', headers, data, ...axiosConfig } = options;
    try {
        const response = await (0, axios_1.default)({
            url,
            method,
            headers,
            data,
            ...axiosConfig,
        });
        const fetchLikeResponse = {
            ok: response.status >= 200 && response.status < 300,
            status: response.status,
            statusText: response.statusText,
            json: () => Promise.resolve(response.data),
            text: () => Promise.resolve(JSON.stringify(response.data)),
            arrayBuffer: () => Promise.resolve(response.data instanceof ArrayBuffer ? response.data : new ArrayBuffer(0)),
            url
        };
        return fetchLikeResponse;
    }
    catch (error) {
        const fetchLikeError = {
            ok: false,
            status: error.response?.status || 500,
            statusText: error.response?.statusText || 'Internal Server Error',
            json: () => Promise.resolve(error.response?.data || {}),
            text: () => Promise.resolve(JSON.stringify(error.response?.data || {})),
            arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
            url
        };
        return fetchLikeError;
    }
}
exports.default = axiosFetch;
