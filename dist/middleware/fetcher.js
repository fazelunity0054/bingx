"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forceFetch = void 0;
const Faker_1 = __importDefault(require("../config/Faker"));
async function forceFetch(path, init) {
    for (let i = 0; i < 6; i++) {
        try {
            const fetch = await filterFetch(path, {
                ...init,
                headers: {
                    ...init.headers
                }
            });
            if (!fetch.ok) {
                throw (`${init.method} ${fetch.url} ${fetch.status}  REQUEST NOT COMPLETED`);
            }
            return fetch;
        }
        catch (e) {
            // console.error(e);TODO: DEBUG ONLY
            // console.error(echoRequest(path,init,e))
            break;
        }
    }
}
exports.forceFetch = forceFetch;
function echoRequest(path, init, e) {
    return `${init.method} ${path}: ${e?.message ?? e}`;
}
function filterFetch(path, init) {
    if (!path.startsWith("http")) {
        path = Faker_1.default.url + path;
    }
    console.log(echoRequest(path, init, "fetch"));
    //@ts-ignore
    return fetch(path, init);
}
