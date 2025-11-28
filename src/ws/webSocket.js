import { WebSocketServer } from 'ws';
import { createToken, verifyToken } from '../api/token.js';
import { 
    create_list,
    create_product,
    get_everything
} from './client_request.js';
import { json } from 'express';


class Client {
    constructor(ws) {
        this.ws = ws
    }
}

export class WSS {
    constructor() {
        this.server = new WebSocketServer({ noServer: true })
        this.clients = new Set()
        this.broadcast = this.broadcast.bind(this)
    }

    start() {
        this.server.on('connection', ws => {
            this.clients.add(new Client(ws));

            ws.on('message', data => {
                let jsonData = JSON.parse(data)
                console.log(jsonData)
                if(!verifyToken(jsonData.header.token)) {
                    ws.send(JSON.stringify({header:{type:jsonData.header.type, success:false, error:"invalid_token"}}))
                    return
                }

                switch (jsonData.header.type) {
                    case "create_list":
                        create_list(ws, this.broadcast, jsonData)
                        break;
                    case "create_product":
                        create_product(ws, this.broadcast, jsonData)
                        break;
                    case "get_everything":

                }
            });

            ws.on('close', () => {
                this.clients.delete(ws);
            });
        });
    }

    handleUpgrade(req, socket, head) {
        this.server.handleUpgrade(req, socket, head, ws => {
            this.server.emit('connection', ws, req);
        });
    }

    broadcast(response) {
        for(let client of this.clients) {
            client.ws.send(JSON.stringify(response))
        }
    }
}