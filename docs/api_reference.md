# API Reference

Jellyfish API is composed of three layers
* a REST API for managing Jellyfish state
* a WS connection for client SDK communication (socket path `/socket/peer`) 
* a WS connection for server notifications (socket path `/socket/server`)

You can find them here:
* [OpenAPI REST description](https://github.com/jellyfish-dev/jellyfish/blob/main/openapi.yaml)
* [AsyncAPI client WS description](https://github.com/jellyfish-dev/jellyfish/blob/main/docs/jellyfish-ws.yaml)
* AsyncAPI server WS description - TODO

The communication between peer WS and server is done with use of JSON format.
The very first message that has to be sent on peer WS is
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


The communication between peer WS and server is done with use of Protobuf format.
All supported messages are listed in [the Jellyfish protos repo](https://github.com/jellyfish-dev/protos).
If you want to create your own Jellyfish SDK, the easiest way to reference to defined protobuf messages will be by adding protos to your git repository as a git submodule. You can do it with this command:
```bash
git submodule add https://github.com/jellyfish-dev/protos
```
You could also consider creating a script that will pull newest changes from the git submodule and compile proto files to your chosen programming language. For reference, see [the script used in our Elixir SDK](https://github.com/jellyfish-dev/elixir_server_sdk/blob/RTC-231-move-server-notifications-to-protobuffs/compile_proto.sh).
