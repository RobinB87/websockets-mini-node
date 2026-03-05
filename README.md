# Intro

Small little websockets tryout session to handle:

* The "Handshake": Connecting a browser to a Node.js server.
* Reliability: Reconnecting automatically if the server goes down (with a retry limit).
* The "Envelope" Pattern: Using JSON to send different types of data (Chat vs. System Updates).
* Server Push: Sending data to the client without them asking (like your Server Clock).
* Broadcasting: Letting one user talk to everyone else instantly.

# Setup server

```bash
npm install ws
```

# Run project

In one terminal: 

```bash
node server.js
```

Open various tabs with the html page.

# Test

1. onerror: Change for example ws url to :3001
2. retry: open html without server started, or kill server while html is connected, and/or reconnect while it is retrying
3. various clients: open multiple tabs and see how it is pushing messages to all clients