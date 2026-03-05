/* unlike HTTP server there are no routes or endpoints */
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

/* 
 Emit connection event every time a client succesfully connects 
 We will receive a socket object; a single open connection to ONE specific client
*/
server.on("connection", (socket) => {
    console.log('Someone connected!');
});