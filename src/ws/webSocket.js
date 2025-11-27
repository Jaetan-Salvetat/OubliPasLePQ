import { WebSocketServer } from 'ws';


export let wss = null
export let clients = []
export function ws_start() {
    wss = new WebSocketServer({ port: 8078 });

    wss.on('connection', function connection(ws) {

        
        ws.on('message', function message(data) {
            console.log('received: %s', data);
        })
    ws.send('something');
    });
}

class WSS {
    constructor() {
        this.server = new WebSocketServer({ port: process.env.WS_PORT })
        this.client = []

    }
}