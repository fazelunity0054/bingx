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
exports.forceFetch = void 0;
const Faker_1 = __importDefault(require("../config/Faker"));
function forceFetch(path, init) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 6; i++) {
            try {
                const fetch = yield filterFetch(path, init);
                if (!fetch.ok) {
                    console.error(fetch.status, yield fetch.text());
                    throw ("REQUEST NOT COMPLETED");
                }
                console.log("FINISHED");
                return fetch;
            }
            catch (e) {
                console.error("error");
                console.log(echoRequest(path, init, e));
            }
        }
    });
}
exports.forceFetch = forceFetch;
function echoRequest(path, init, e) {
    var _a;
    return `${init.method} ${path}: ${(_a = e === null || e === void 0 ? void 0 : e.message) !== null && _a !== void 0 ? _a : e}`;
}
function filterFetch(path, init) {
    if (!path.startsWith("http")) {
        path = Faker_1.default.url + path;
    }
    console.log(echoRequest(path, init, "fetch"));
    return fetch(path, init);
}
