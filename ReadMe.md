### TODO APP - tRPC

The aim is to create a simple TODO app have client and server side with tRPC.
For this we are keeping the server and client in the same repo without using mono repo

what all this covers

- Setup tRPC
- How to use tRPC in server and Client ( types support )
- Create routes and endpoints
- Authentication (`context and middlewares in tRPC`)

### server

- exposed RPC APIs
  - CreateTodo
  - Signup

Run the client

- compile code : `tsc -b`
- start server : `node dist/server/index.js`

### client

client is demoed as simple node app. But the implementation is similar in any other client like React, NextJs etc.

To Run

- compile code : `tsc -b`
- start server : `node dist/server/index.js`
