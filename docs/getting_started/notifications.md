# Notifications

Jellyfish sends server side notifications whenever some important event occurs, e.g.:
* a room has been created
* some peer has connected
* component has crashed
* etc.

Notifications can be received through websockets or webhooks.

A full list of available notifications is always present in specific server SDK documentation.
Here, we present how you can subscribe for server side websocket notifications using Elixir Server SDK:

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

To receive server notifications through webhooks you have to pass `webhook_url` during creating room.
Example using Elixir Server SDK:
```elixir
server_address = "localhost:5002"
server_api_token = "development"
webhook_url = "http://localhost:5003/"

client = Jellyfish.Client.new(server_address: server_address, server_api_token: server_api_token)
{:ok, %Jellyfish.Room{id: room_id}, jellyfish_address} = Jellyfish.Room.create(client, max_peers: 10, webhook_url: webhook_url)
```

To decode received notification through webhook, you can use a function from SDK.
Example using Elixir Server SDK:
```elixir
  notification = %{
    "notification" => <<18, 76, 10, 36, 102, 98, 102, 52, 49, 57, 48, 99, 45, 53, 99, 55, 54, 45, 52,
    49, 53, 99, 45, 56, 57, 51, 57, 45, 53, 50, 99, 54, 101, 100, 50, 48, 56, 54,
    56, 98, 18, 36, 99, 55, 50, 51, 54, 53, 56, 55, 45, 53, 100, 102, 56, 45, 52,
    98, 52, 49, 45, 98, 54, 101, 52, 45, 50, 54, 56, 101, 55, 49, 49, 51, 51, 101,
    101, 50>>
  } 
  Jellyfish.WebhookNotifier.receive(notification) |> IO.inspect()
```

As a result, you should see the following logs:
```
%Jellyfish.Notification.PeerConnected{
  room_id: "fbf4190c-5c76-415c-8939-52c6ed20868b",
  peer_id: "c7236587-5df8-4b41-b6e4-268e71133ee2"
  }
```