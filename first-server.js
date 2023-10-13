import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8083 }, () => {
    console.log('listens on :8083');
});

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: ', JSON.parse(data));

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});
