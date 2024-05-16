# API Reference

Fishjam API is composed of three layers

* a REST API for managing Fishjam state
* a WS connection for client SDK communication (socket path `/socket/peer`)
* a WS connection for server notifications (socket path `/socket/server`)

You can find them here:

* [OpenAPI REST description](api_reference/rest_api.md)
* [Protobufs used by peer WS](https://github.com/fishjam-dev/protos/blob/master/fishjam/peer_notifications.proto)
* [Protobufs used by server WS](https://github.com/fishjam-dev/protos/blob/master/fishjam/server_notifications.proto)

The communication via WebSockets uses [Protobuf](https://protobuf.dev) format.
The very first message that has to be sent on either of the WebSocket connections (**peer** to **Fishjam** or
**your_backend_server** to **Fishjam**) is `AuthRequest`.
All supported messages are listed in [the Fishjam protos repo](https://github.com/fishjam-dev/protos).

If you want to create your own Fishjam SDK, the easiest way to reference defined protobuf messages
will be by adding *protos* to your git repository as a git submodule. You can do it with this command:

```bash
git submodule add https://github.com/fishjam-dev/protos
```

You could also consider creating a script that will pull the newest changes from the git submodule and compile
*.proto* files to your chosen programming language.
For reference, see [the script used in our Elixir SDK](https://github.com/fishjam-dev/elixir_server_sdk/blob/master/compile_proto.sh).
