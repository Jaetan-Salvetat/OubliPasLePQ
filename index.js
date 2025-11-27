import express  from 'express'
import { database } from "./src/database/connect.js"
import { loadSQLDir } from './src/sql/sqlLoader.js'
import { initdatabase } from './src/database/initializeDatabase.js'
import { authRoute } from "./src/api/routes.js"
import { verifyAllToken } from './src/api/token.js'
import consts from "./src/constants.js"
import { WSS } from './src/ws/webSocket.js'
import http from "http"


/*
  DATABASE SETUP
*/
await database.Connect()
loadSQLDir()

await initdatabase()


/*
  EXPRESS SETUP
*/
const app = express()
app.use(express.json());
const server = http.createServer(app)


setInterval(verifyAllToken, consts.ONE_HOUR * 6)

server.on("upgrade", (req, socket, head) => {
    req.ws = { socket, head, handled: false };
    const res = new http.ServerResponse(req);
    app(req, res);
});

//self call
app.get('/health', (req, res) => {
  res.send({ response:"OK" })
})

app.get("/ws", (req, res) => {
    if (req.ws) {
        req.ws.handled = true;
        WS_server.handleUpgrade(req, req.ws.socket, req.ws.head);
        return;
    }

    // si ce n'est pas un websocket
    res.status(400).send("Not a websocket");
});

/*
  WSS SETUP
*/
const WS_server = new WSS() 
WS_server.start()



authRoute(app)
server.listen(process.env.API_PORT, () => {
  console.log(`Server listening on port: ${process.env.API_PORT}`)
})