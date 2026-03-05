/* unlike HTTP server there are no routes or endpoints */
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

/* 
 Emit connection event every time a client succesfully connects 
 We will receive a socket object; a single open connection to ONE specific client
*/
server.on("connection", (socket) => {
    console.log('A user connected');

    socket.send('Welcome!');

    /* 
     Server can now listen for messages from client
     WebSockets do not use requests or routes, they use events
    */
    socket.on('message', data => {
        try {
            const message = JSON.parse(data);

            let broadcast = 'Broadcast: ';
            if (message.type === "chat") {
                console.log("Chat received: ", message.payload);
                broadcast += message.payload;
            } else if (message.type === "object") {
                Object.entries(message.payload).forEach(([key, value]) => {
                    const objectMessage = `${key}: ${value}`;
                    console.log(objectMessage);

                    broadcast += objectMessage;
                });
            }

            /* Send message to all clients who are still listening */
            server.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(broadcast);
                }
            });

            
        } catch {
            console.error('Message is not valid JSON!')
        }
    });
});
