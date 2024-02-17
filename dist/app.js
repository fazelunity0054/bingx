"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const http_1 = require("http");
const ws_1 = require("ws");
const Transformer_1 = require("./ws/Transformer");
const other_1 = require("./utils/other");
const image_1 = require("./routes/image");
const middleware_1 = require("./middleware/middleware");
const fs = __importStar(require("fs"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get("/contracts", other_1.contractList);
// @ts-ignore
app.get("/image", image_1.currencyImage);
// @ts-ignore
app.use((req, res, n) => {
    if (req.path.startsWith("/fake")) {
        // @ts-ignore
        (0, middleware_1.middleware)(req, res);
    }
    else
        n();
});
const server = (0, http_1.createServer)(app);
const wss = new ws_1.WebSocket.Server({ server, path: '/market' });
const PORT = process.env.PORT || 30054;
server.listen(PORT, () => {
    const test = fs.readDir();
    console.log(`Websocket running on http://localhost:${PORT}`);
});
wss.on('connection', (w, i) => {
    (0, Transformer_1.InitialSocketTransformer)(w, i).catch((error) => {
        console.log(error);
        return true;
    });
});
module.exports = app;
