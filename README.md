# Setup

## Server

```bash
npm install ws
```

# Run

In one terminal: 

```bash
node server.js
```

In another terminal: 

```bash
node client.js
```

## Test

1. onerror: Change for example ws url to :3001
2. retry: open html without server started, or kill server while html is connected, and/or reconnect while it is retrying
3. various clients: open multiple tabs and see how it is pushing messages to all clients