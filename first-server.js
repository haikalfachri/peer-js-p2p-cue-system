import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8081 }, () => {
    console.log('listens on :8081');
});

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log('received: ', JSON.parse(data));
    });

    ws.send('something');
});
