"use strict";
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
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get("/contracts", other_1.contractList);
// @ts-ignore
app.get("/image", image_1.currencyImage);
// @ts-ignore
app.use(middleware_1.middleware);
const server = (0, http_1.createServer)(app);
const wss = new ws_1.WebSocket.Server({ server, path: '/market' });
const PORT = process.env.PORT || 30054;
server.listen(PORT, () => {
    console.log(`Websocket running on http://localhost:${PORT}`);
});
wss.on('connection', (w, i) => {
    (0, Transformer_1.InitialSocketTransformer)(w, i).catch((error) => {
        console.log(error);
        return true;
    });
});
module.exports = app;
