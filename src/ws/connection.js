import { WebSocketServer } from 'ws';

let wss = null

// export function ws_start() {
    
//     wss = new WebSocketServer({ port: process.env.WS_PORT });

//     wss.on('connection', function connection(ws) {

        
//         ws.on('message', function message(data) {
//             console.log('received: %s', data);
//         })
//         ws.on('message', function message(data) {
//             console.log('received: %s', data);
//         });

//         ws.send('something');
//     });
// }
