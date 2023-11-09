# Notifications

Jellyfish sends server side notifications whenever some important event occurs, e.g.:
* a room has been created
* some peer has connected
* component has crashed
* etc.

A full list of available notifications is always present in specific server SDK documentation.
Notifications can be received through websockets or webhooks.


## Websockets
WebSocket is a communication protocol that provides full-duplex communication between a client and a server over a persistent connection.

#### Elixir example
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

#### Python example
Here, we present how you can subscribe for server side websocket notifications using Python Server SDK:

```python
from jellyfish import Notifier
server_address = "localhost:5002"
server_api_token = "development"
room_api = Notifier(server_address = server_address, server_api_token = server_api_token)
notifier.connect()
await notifier.wait_ready()
```

As a result, you should see the following logs on the server side
```
07:45:02.684 [info] New incoming server WebSocket connection, accepting
07:45:02.688 [info] Server WS authenticated.
```

## Webhooks
Webhook is a method of augmenting or altering the behaviour of a web page, application, or web API by allowing it to send real-time data to a specified URL when a certain event occurs.

To receive server notifications through webhooks you have to pass `webhook_url` during room creation.

#### Elixir example

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
  def call(conn, _opts) do
    {:ok, body, conn} = Plug.Conn.read_body(conn, [])
    json_body = Jason.decode!(body)

    notification = WebhookNotifier.receive(json_body)

    conn
    |> put_resp_content_type("text/plain")
    |> send_resp(200, "OK")
  end
```

As a result, this will be value in notification variable:
```
%Jellyfish.Notification.PeerConnected{
  room_id: "fbf4190c-5c76-415c-8939-52c6ed20868b",
  peer_id: "c7236587-5df8-4b41-b6e4-268e71133ee2"
  }
```


#### Python example
Example using Python Server SDK:
```python
from jellyfish import Notifier, RoomApi
server_address = "localhost:5002"
server_api_token = "development"
webhook_url = "http://localhost:5003/webhook"

room_api = RoomApi(server_address = server_address, server_api_token = server_api_token)
_, room = room_api.create_room(webhook_url=webhook_url)
```

To decode received notification through webhook, you can use a function from SDK.
Example using Elixir Server SDK:
```python
  from jellyfish import recevie_json

  @app.route("/webhook", methods=["POST"])
  def respond_root():
      json = request.get_json()
      notification = receive_json(json)

      return Response(status=200)
```

Example value in notification variable:
```
ServerMessageRoomCreated(room_id='7ed98fd9-a5ca-4223-9c3a-111067c8b7f6')
```



