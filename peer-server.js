import express from 'express';
import { ExpressPeerServer } from 'peer';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const server = app.listen(
    8080,
    /* '172.20.10.7', */ () => {
        console.log('server listens on :8080');
    }
);

const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/server',
});

app.use('/peer', peerServer);

peerServer.on('connection', (client) => {
    console.log(client.getId(), +'connected');
});
peerServer.on('disconnect', (client) => {
    console.log(client.getId(), +'disconnected');
});
