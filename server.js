/* unlike HTTP server there are no routes or endpoints */
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

/* 
 Emit connection event every time a client succesfully connects 
 We will receive a socket object; a single open connection to ONE specific client
*/
server.on("connection", (socket) => {
    console.log('A user connected');

    /* 
     Server can now listen for messages from client
     WebSockets do not use requests or routes, they use events
    */
    socket.on('message', message => {
        console.log('Client says:', message.toString());
    });

    socket.send('Welcome!');
});