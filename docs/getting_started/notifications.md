# Notifications

Jellyfish sends server side notifications whenever some important event occurs, e.g.:
* a room has been created
* some peer has connected
* component has crashed
* etc.

A full list of available notifications is always present in specific server SDK documentation.
Here, we present how you can subscribe for server side notifications using Elixir Server SDK:

```elixir
server_address = "localhost:5002"
server_api_token = "development"

{:ok, notifier} =
  Jellyfish.Notifier.start(server_address: server_address, server_api_token: server_api_token)

:ok = Jellyfish.Notifier.subscribe_server_notifications(notifier)
:ok = Jellyfish.Notifier.subscribe_metrics(notifier)
```

As a result, you should see the following logs on the server side

```
07:45:02.684 [info] New incoming server WebSocket connection, accepting
07:45:02.688 [info] Server WS authenticated.
```