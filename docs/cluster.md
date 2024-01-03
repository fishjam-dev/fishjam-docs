# Cluster

Jellyfish comes with a built-in clustering mechanism.
By a cluster, we mean a set of connected Jellyfish instances.
Whenever a new request for creating a room is sent to one of Jellyfishes in a cluster, this Jellyfish
communicates with all other nodes and creates a room on the node with the lowest load.
In response, a Jellyfish address (specified with `JF_HOST` environment variable) where the room was created is returned.

:::info

Even when running a cluster of Jellyfishes, a room still has to fit into one Jellyfish.
Currently, Jellyfish doesn't offer an option to split a room across multiple machines.

:::

:::warning Security

Jellyfish distribution is not encrypted meaning that data between Jellyfishes is sent as plain text.
Cookie does not provide any cryptographic security.
Do run a cluster only across machines in the same network!

:::

:::tip Distribution Environment Variables

List of all cluster-related environment variables is available [here](./getting_started/installation#distribution).

:::

<a id="extra-network-configuration"></a>

:::caution Extra network Configuration

Jellyfish leverages Erlang Distribution to form a cluster.
This means that we don't need to use any database where we would store
information about network topology.
Instead, some extra network configuration might be needed.

* Jellyfish in distributed mode uses a service called EPMD (Erlang Port Mapper Deamon)
that runs on port `4369` (TCP).
If you run Jellyfish using Docker, you have to explicitly export this port.
In production deployment, you also have to allow for traffic on this port in your firewall.
EPMD is started automatically when running Jellyfish, so you don't need to take
any extra steps to make it work.

* Jellyfish uses a random port for connecting to other Jellyfishes.
If you run Jellyfish using Docker, this port defaults to `9000` (TCP) but you can configure
the range it is selected from with `JF_DIST_MIN_PORT` and `JF_DIST_MAX_PORT`.
Note that `JF_DIST_MIN_PORT` and `JF_DIST_MAX_PORT` are not available when running from source 
(using `mix phx.server`) as in development you don't have to worry about the port used for
forming a cluster.
As in the case of EPMD, in production deployment, you have to modify your firewall rules appropriately.

See [Deeper dive into Erlang Distribution](#deeper-dive-into-erlang-distribution) for more information.

:::


## Strategies

Currently, Jellyfish supports two clustering strategies: `NODES_LIST` and `DNS`, but other strategies
might be added in the future.

* `NODES_LIST` - form a cluster basing on a list of Jellyfish addresses
* `DNS` - regularly query DNS to discover other Jellyfishes
 
Regardless of the strategy, Erlang Distribution is transitive.
When node A connects to node B, it also connects to all other nodes that node B is connected to.


## NODES_LIST 

To form a cluster using `NODES_LIST` strategy:

1. Enable distribution mode with `JF_DIST_ENABLED=true`
1. Give your node a name with `JF_DIST_NODE_NAME`
1. Specify a list of nodes to connect to with `JF_DIST_NODES`


### Running from source

Run the first Jellyfish:

```sh
JF_DIST_ENABLED=true JF_DIST_NODE_NAME=j1@localhost mix phx.server
```

Run the second Jellyfish

```sh
JF_DIST_ENABLED=true JF_DIST_NODE_NAME=j2@localhost JF_DIST_NODES="j1@localhost" JF_PORT=4002 JF_METRICS_PORT=9468 mix phx.server
```

:::info

Note that when running the second Jellyfish, we had to change its HTTP and metrics ports.

:::


### Running with Docker (locally)

This simple docker compose file sets a cluster of two Jellyfishes.

```yml
version: "3"

x-jellyfish-template: &jellyfish-template
  build: .
  environment: &jellyfish-environment
    JF_SERVER_API_TOKEN: "development"
    JF_DIST_ENABLED: "true"
    JF_DIST_NODES: "j1@jellyfish1 j2@jellyfish2"
  restart: on-failure

services:
  jellyfish1:
    <<: *jellyfish-template
    environment:
      <<: *jellyfish-environment
      JF_HOST: "localhost:5001"
      JF_PORT: 5001
      JF_METRICS_PORT: 6001
      JF_DIST_NODE_NAME: j1@jellyfish1
    ports:
      - 5001:5001
      - 6001:6001

  jellyfish2:
    <<: *jellyfish-template
    environment:
      <<: *jellyfish-environment
      JF_HOST: "localhost:5002"
      JF_PORT: 5002
      JF_METRICS_PORT: 6002
      JF_DIST_NODE_NAME: j2@jellyfish2
    ports:
      - 5002:5002
      - 6002:6002
```

Because we run Jellyfishes in the same Docker network:
* we can use `JF_DIST_NODE: "sname"`, which allows
us to reference Jellyfishes using their service names so
`jellyfish1` and `jellyfish2`
* we don't need to export EPMD (`4369`) or distribution (`9000`)
ports


### Running with Docker (globally)

When forming a cluster across multiple machines:
* you have to take care of [Extra Network Configuration](#extra-network-configuration)
* you also can't use `JF_DIST_MODE="sname"` as you have to name Jellyfish nodes using their publicly available IP address
or domain names (see `JF_DIST_NODE_NAME` and `JF_DIST_MODE`)
* you can't simulate this setup locally as you won't be able to expose two EMPD ports on the same machine.
See [Deeper dive into Erlang Distribution](#deeper-dive-into-erlang-distribution) for more information.

See our [Jellyfish Videoroom deployment configuration](https://github.com/jellyfish-dev/jellyfish_videoroom/blob/main/docker-compose-deploy.yaml) for an example.


## DNS

To form a cluster using `DNS` strategy:

1. Enable distribution mode with `JF_DIST_ENABLED=true`
1. Chose `DNS` strategy with `JF_DIST_STRATEGY_NAME`.
1. Set `JF_DIST_MODE` to `name`.
1. Give your node a name with `JF_DIST_NODE_NAME`.<br /> 
**Important** It has to be in the form of `<nodename>@<hostname>`
where all Jellyfishes MUST have the same `<nodename>`.
1. Specify a query under which Jellyfishes are register in DNS with `JF_DIST_QUERY`. <br />
**Important** Jellyfish does not register itself in DNS.
It is user responsibility to enusre that your Jellyfish is registered in DNS under `JF_DIST_QUERY`.

### Running with Docker

This simple docker compose file sets a cluster of two Jellyfishes using internal Docker DNS.

```yml
version: "3"
x-jellyfish-template: &jellyfish-template
  build: .
  environment: &jellyfish-environment
    JF_SERVER_API_TOKEN: "development"
    JF_DIST_ENABLED: "true"
    JF_DIST_STRATEGY_NAME: "DNS"
    JF_DIST_MODE: "name"
  restart: on-failure
services:
  app1:
    <<: *jellyfish-template
    environment:
      <<: *jellyfish-environment
      JF_HOST: "localhost:4001"
      JF_PORT: 4001
      JF_DIST_QUERY: app.dns-network
    ports:
      - 4001:4001
    networks:
      default:
        aliases:
          - app.dns-network

  app2:
    <<: *jellyfish-template
    environment:
      <<: *jellyfish-environment
      JF_HOST: "localhost:4002"
      JF_PORT: 4002
      JF_DIST_QUERY: app.dns-network
    ports:
      - 4002:4002
    networks:
      default:
        aliases:
          - app.dns-network
```

Because we run Jellyfishes in the same Docker network we don't need to export EPMD (`4369`) or distribution (`9000`)
ports.
We also didn't have to explicitly set `JF_DIST_NODE_NAME`.
The default value (`jellyfish@(hostname)`) is automatically resolved to `jellyfish@<ip_address>`
and is routable from other nodes in the docker network.

## Verifying that a cluster has been created

When a cluster is created correctly you will see a log indicating that one of your Jellyfishes connected to the other one, e.g.:

```
[info] [libcluster:epmd_cluster] connected to :"j1@127.0.0.1"
```

To see clustering in action, create two rooms using the same Jellyfish address and observe how they are load balanced:

```bash
curl -X POST -H "authorization: Bearer development" http://localhost:4002/room
# {"data":{"jellyfish_address":"localhost:4001"}}
```

```bash
curl -X POST -H "authorization: Bearer development" http://localhost:4002/room
# {"data":{"jellyfish_address":"localhost:4002"}}
```

Load balancing can also be tested using [Jellyfish Dashboard](https://github.com/jellyfish-dev/jellyfish-dashboard).
See [here](./tutorials/dashboard#loadbalancing-in-dashboard) for more information.

## Deeper dive into Erlang Distribution

The most tricky thing when running Jellyfish in a cluster is to understand the role of EPMD.
EPMD is responsible for mapping node names to ports they use.
Node names consist of two parts `nodename@hostname`.
`hostname` identifies a host machine, and `nodename` identifies a node on this machine.
When node A wants to connect to node B, it uses node's B name to ask EPMD (running on node B) 
for the actual port node B is accessible on.

**Example**

1. Let's assume that node's B name is `nodeb@192.168.1.2`.
1. Node A will contact EPMD using `192.168.1.2` IP address and port `4369`, and ask for the
port number used by a node with the name `nodeb`.
1. After that, node A can contact node B using `192.168.1.2` IP address and port returned by EPMD.

A couple of notes about EPMD:
* it always uses port `4369` (TCP)
* it is started automatically when running Jellyfish
* there is one EPMD per machine or one EPMD per docker container - 
that's why we can't simulate Global Docker setup locally

You can read more about Erlang Distribution [here](https://www.erlang.org/doc/reference_manual/distributed.html).
