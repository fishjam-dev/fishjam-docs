import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Notifications

Jellyfish sends server side notifications whenever some important event occurs, e.g.:
* a room has been created
* some peer has connected
* component has crashed
* etc.

A full list of available notifications is always present in specific server SDK documentation.
Notifications can be received through [WebSockets](#websockets) or [Webhooks](#webhooks).

## WebSockets

WebSocket (WS) is a communication protocol that provides full-duplex communication between a client and a server over a persistent connection.
When you create a notifier, it will open WS connection, receive notifications,
decode and return them to you via callbacks or messages.
In other words, you don't have to do anything on your own.

<Tabs>
  <TabItem value="python" label="Python">

```python
from jellyfish import Notifier

server_address = "localhost:5002"
server_api_token = "development"

notifier = Notifier(server_address = server_address, server_api_token = server_api_token)

@notifier.on_server_notification
def handle_notification(server_notification):
    print(f'Received a notification: {server_notification}')

@notifier.on_metrics
def handle_metrics(metrics_report):
    print(f'Received WebRTC metrics: {metrics_report}')

async def run():
    await notifier.connect()
    await notifier.wait_ready()

asyncio.run(run())
```

  </TabItem>

  <TabItem value="elixir" label="Elixir">

```elixir
server_address = "localhost:5002"
server_api_token = "development"

{:ok, notifier} =
  Jellyfish.WSNotifier.start(server_address: server_address, server_api_token: server_api_token)

:ok = Jellyfish.WSNotifier.subscribe_server_notifications(notifier)
:ok = Jellyfish.WSNotifier.subscribe_metrics(notifier)

receive do
  {:jellyfish, %Jellyfish.Notification.PeerConnected{} = notification} ->
    IO.inspect(notification)
  # other notificaitons ...
end
```

  </TabItem>
</Tabs>

As a result, you should see the following logs on the server side

```
07:45:02.684 [info] New incoming server WebSocket connection, accepting
07:45:02.688 [info] Server WS authenticated.
```

## Webhooks

Webhooks are simply HTTP POST requests sent to a specified URL.
They are a common choice in serverless architectures where a WebSocket connection cannot be established.

The most important difference between Webhook and WebSocket notifications is that you have to receive those
POST requests on your own and then use SDK's decode functions to get the actual notification.

To receive server notifications through webhooks you have to pass `webhook_url` during room creation.

<Tabs>
  <TabItem value="python" label="Python">

```python
from jellyfish import Notifier, RoomApi
from jellyfish import recevie_json

server_address = "localhost:5002"
server_api_token = "development"
webhook_url = "http://localhost:5003/webhook"

room_api = RoomApi(server_address = server_address, server_api_token = server_api_token)
_, room = room_api.create_room(webhook_url=webhook_url)

# assuming you are using Flask
@app.route("/webhook", methods=["POST"])
def respond_root():
    json = request.get_json()
    notification = receive_json(json)

    return Response(status=200)
```

  </TabItem>

  <TabItem value="elixir" label="Elixir">

```elixir
server_address = "localhost:5002"
server_api_token = "development"
webhook_url = "http://localhost:5003/webhook"

client = Jellyfish.Client.new(server_address: server_address, server_api_token: server_api_token)
{:ok, %Jellyfish.Room{id: room_id}, jellyfish_address} = Jellyfish.Room.create(client, max_peers: 10, webhook_url: webhook_url)

# assuming you are using Phoenix
# router.ex
scope "/", MyAppWeb do
  post "/webhook", WebhookController, :receive_webhook_notification
end

# webhook_controller.ex
def receive_webhook_notification(conn, _params) do
  {:ok, body, conn} = Plug.Conn.read_body(conn, [])
  json_body = Jason.decode!(body)

  notification = Jellyfish.WebhookNotifier.receive(json_body)

  conn
  |> put_resp_content_type("text/plain")
  |> send_resp(200, "OK")
end

```

  </TabItem>
</Tabs>
