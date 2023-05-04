# API Reference

Jellyfish API is composed of three layers
* a REST API for managing Jellyfish state
* a WS connection for client SDK communication (socket path `/socket/peer`) 
* a WS connection for server notifications (socket path `/socket/server`)

You can find them here:
* [OpenAPI REST description](https://github.com/jellyfish-dev/jellyfish/blob/main/openapi.yaml)
* [AsyncAPI client WS description](https://github.com/jellyfish-dev/jellyfish/blob/main/docs/jellyfish-ws.yaml)
* AsyncAPI server WS description - TODO

The very first message that has to be sent both on peer and server WS is
authorization request.

For example

```js
authRequest = JSON.stringify({
    type: "controlMessage",
    data: {
        type: "authRequest",
        token: "development"
    }
})

ws = new WebSocket("ws://localhost:4000/socket/server/websocket")
ws.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
});
ws.send(authRequest)
```