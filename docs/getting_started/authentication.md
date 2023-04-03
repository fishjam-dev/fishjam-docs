import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authentication

Authentication mechanism is based on bearer token.
How does it work?
Both Jellyfish and Business Logic are configured with the same secret.
This secret is used for authorizing HTTP requests (via HTTP authorization request header).
When adding a new peer, Jellyfish creates a token for this peer and returns
it to the Business Logic.
Business Logic is then responsible for passing received token to the client that is willing
to connect to Jellyfish and the client sends its token in the first message after opening
Web Socket connection to Jellyfish.

Token encodes peer id and room id. 

1. Run Jellyfish

```bash
JELLYFISH_SECRET=mySecret mix phx.server
```

2. Create a room and add one peer

```elixir title="Business Logic"
client = Jellyfish.Client.new("http://address-of-your-server.com", "mySecret")
{:ok, room} = Jellyfish.Room.create(client, max_peers: 10)
{:ok, peer, token} = Jellyfish.Room.add_peer(client, room.id, "BobId")
```

3. Connect as a peer to Jellyfish

```ts title="Client"
client.connect({ 
  token: token,
  peerMetadata: { name: "Bob" }, 
  isSimulcastOn: false
})
```
