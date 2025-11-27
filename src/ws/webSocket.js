import { WebSocketServer } from 'ws';


export class WSS {
    constructor() {
        this.server = new WebSocketServer({ noServer: true })
        this.clients = new Set()
    }

    start() {
        this.server.on('connection', ws => {
            this.clients.add(ws);

            ws.on('message', data => {
                console.log('received:', data.toString());
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

    broadcast(action) {
        for (let client of this.clients) {
            action(client);
        }
    }
}