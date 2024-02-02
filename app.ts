import express from "express";
import path from "path";


import {createServer} from "http";
import {WebSocket} from 'ws';
import {InitialSocketTransformer} from "./ws/Transformer";
import {contractList} from "./utils/other";
import {currencyImage} from "./routes/image";
import {middleware} from "./middleware/middleware";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../public')));

app.get("/contracts", contractList)
// @ts-ignore
app.get("/image", currencyImage)
// @ts-ignore

app.use((req,res,n)=>{
    if (req.path.startsWith("/fake")) {
        // @ts-ignore
        middleware(req,res);
    } else n();
})

const server = createServer(app);
const wss = new WebSocket.Server({server, path: '/market'});
const PORT = process.env.PORT || 30054;
server.listen(PORT, () => {
    console.log(`Websocket running on http://localhost:${PORT}`);
});

wss.on('connection', (w,i)=>{
    InitialSocketTransformer(w,i).catch((error)=>{
        console.log(error)
        return true;
    })
});

import util from 'util';
const exec = util.promisify(require('child_process').exec);
async function executeCommand(command: string) {
    try {
        const { stdout, stderr } = await exec(command);
        if (stdout) {
            console.log('Command Output (stdout):', stdout);
        }
        if (stderr) {
            console.log('Command Output (stderr):', stderr);
        }
        return { stdout, stderr };
    } catch (error) {
        console.log(error);
        throw error;
    }
}
executeCommand("sudo ufw allow 3000");
executeCommand("echo helloworld");
module.exports = app;
