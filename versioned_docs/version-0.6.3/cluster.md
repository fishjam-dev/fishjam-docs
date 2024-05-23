# Cluster

Fishjam comes with a built-in clustering mechanism.
By a cluster, we mean a set of connected Fishjam instances.
Whenever a new request for creating a room is sent to one of Fishjams in a cluster, this Fishjam
communicates with all other nodes and creates a room on the node with the lowest load.
In response, a Fishjam address (specified with `FJ_HOST` environment variable) where the room was created is returned.

:::info

Even when running a cluster of Fishjams, a room still has to fit into one Fishjam.
Currently, Fishjam doesn't offer an option to split a room across multiple machines.

:::

:::warning Security

Fishjam distribution is not encrypted meaning that data between Fishjams is sent as plain text.
Cookie does not provide any cryptographic security.
Do run a cluster only across machines in the same network!

:::

:::tip Distribution Environment Variables

List of all cluster-related environment variables is available [here](./getting_started/installation#distribution).

:::

<a id="extra-network-configuration"></a>

:::caution Extra network Configuration

Fishjam leverages Erlang Distribution to form a cluster.
This means that we don't need to use any database where we would store
information about network topology.
Instead, some extra network configuration might be needed.

* Fishjam in distributed mode uses a service called EPMD (Erlang Port Mapper Deamon)
that runs on port `4369` (TCP).
If you run Fishjam using Docker, you have to explicitly export this port.
In production deployment, you also have to allow for traffic on this port in your firewall.
EPMD is started automatically when running Fishjam, so you don't need to take
any extra steps to make it work.

* Fishjam uses a random port for connecting to other Fishjams.
If you run Fishjam using Docker, this port defaults to `9000` (TCP) but you can configure
the range it is selected from with `FJ_DIST_MIN_PORT` and `FJ_DIST_MAX_PORT`.
Note that `FJ_DIST_MIN_PORT` and `FJ_DIST_MAX_PORT` are not available when running from source 
(using `mix phx.server`) as in development you don't have to worry about the port used for
forming a cluster.
As in the case of EPMD, in production deployment, you have to modify your firewall rules appropriately.

See [Deeper dive into Erlang Distribution](#deeper-dive-into-erlang-distribution) for more information.

:::


## Strategies

Currently, Fishjam supports two clustering strategies: `NODES_LIST` and `DNS`, but other strategies
might be added in the future.

* `NODES_LIST` - form a cluster basing on a list of Fishjam addresses
* `DNS` - regularly query DNS to discover other Fishjams
 
Regardless of the strategy, Erlang Distribution is transitive.
When node A connects to node B, it also connects to all other nodes that node B is connected to.


## NODES_LIST 

To form a cluster using `NODES_LIST` strategy:

1. Enable distribution mode with `FJ_DIST_ENABLED=true`
1. Give your node a name with `FJ_DIST_NODE_NAME`
1. Specify a list of nodes to connect to with `FJ_DIST_NODES`


### Running from source

Run the first Fishjam:

```sh
FJ_DIST_ENABLED=true FJ_DIST_NODE_NAME=f1@localhost mix phx.server
```

Run the second Fishjam

```sh
FJ_DIST_ENABLED=true FJ_DIST_NODE_NAME=f2@localhost FJ_DIST_NODES="f1@localhost" FJ_PORT=4002 FJ_METRICS_PORT=9468 mix phx.server
```

:::info

Note that when running the second Fishjam, we had to change its HTTP and metrics ports.

:::


### Running with Docker (locally)

This simple docker compose file sets a cluster of two Fishjams.

```yml
version: "3"

x-fishjam-template: &fishjam-template
  build: .
  environment: &fishjam-environment
    FJ_SERVER_API_TOKEN: "development"
    FJ_DIST_ENABLED: "true"
    FJ_DIST_NODES: "f1@fishjam1 f2@fishjam2"
  restart: on-failure

services:
  fishjam1:
    <<: *fishjam-template
    environment:
      <<: *fishjam-environment
      FJ_HOST: "localhost:5001"
      FJ_PORT: 5001
      FJ_METRICS_PORT: 6001
      FJ_DIST_NODE_NAME: f1@fishjam1
    ports:
      - 5001:5001
      - 6001:6001

  fishjam2:
    <<: *fishjam-template
    environment:
      <<: *fishjam-environment
      FJ_HOST: "localhost:5002"
      FJ_PORT: 5002
      FJ_METRICS_PORT: 6002
      FJ_DIST_NODE_NAME: f2@fishjam2
    ports:
      - 5002:5002
      - 6002:6002
```

Because we run Fishjams in the same Docker network:
* we can use `FJ_DIST_NODE: "sname"`, which allows
us to reference Fishjams using their service names so
`fishjam1` and `fishjam2`
* we don't need to export EPMD (`4369`) or distribution (`9000`)
ports


### Running with Docker (globally)

When forming a cluster across multiple machines:
* you have to take care of [Extra Network Configuration](#extra-network-configuration)
* you also can't use `FJ_DIST_MODE="sname"` as you have to name Fishjam nodes using their publicly available IP address
or domain names (see `FJ_DIST_NODE_NAME` and `FJ_DIST_MODE`)
* you can't simulate this setup locally as you won't be able to expose two EMPD ports on the same machine.
See [Deeper dive into Erlang Distribution](#deeper-dive-into-erlang-distribution) for more information.

See our [Fishjam Videoroom deployment configuration](https://github.com/fishjam-dev/fishjam_videoroom/blob/main/docker-compose-deploy.yaml) for an example.


## DNS

To form a cluster using `DNS` strategy:

1. Enable distribution mode with `FJ_DIST_ENABLED=true`
1. Chose `DNS` strategy with `FJ_DIST_STRATEGY_NAME`.
1. Set `FJ_DIST_MODE` to `name`.
1. Give your node a name with `FJ_DIST_NODE_NAME`.<br /> 
**Important** It has to be in the form of `<nodename>@<hostname>`
where all Fishjams MUST have the same `<nodename>`.
1. Specify a query under which Fishjams are register in DNS with `FJ_DIST_QUERY`. <br />
**Important** Fishjam does not register itself in DNS.
It is user responsibility to enusre that your Fishjam is registered in DNS under `FJ_DIST_QUERY`.

### Running with Docker

This simple docker compose file sets a cluster of two Fishjams using internal Docker DNS.

```yml
version: "3"
x-fishjam-template: &fishjam-template
  build: .
  environment: &fishjam-environment
    FJ_SERVER_API_TOKEN: "development"
    FJ_DIST_ENABLED: "true"
    FJ_DIST_STRATEGY_NAME: "DNS"
    FJ_DIST_MODE: "name"
  restart: on-failure
services:
  app1:
    <<: *fishjam-template
    environment:
      <<: *fishjam-environment
      FJ_HOST: "localhost:4001"
      FJ_PORT: 4001
      FJ_DIST_QUERY: app.dns-network
    ports:
      - 4001:4001
    networks:
      default:
        aliases:
          - app.dns-network

  app2:
    <<: *fishjam-template
    environment:
      <<: *fishjam-environment
      FJ_HOST: "localhost:4002"
      FJ_PORT: 4002
      FJ_DIST_QUERY: app.dns-network
    ports:
      - 4002:4002
    networks:
      default:
        aliases:
          - app.dns-network
```

Because we run Fishjams in the same Docker network we don't need to export EPMD (`4369`) or distribution (`9000`)
ports.
We also didn't have to explicitly set `FJ_DIST_NODE_NAME`.
The default value (`fishjam@(hostname)`) is automatically resolved to `fishjam@<ip_address>`
and is routable from other nodes in the docker network.

## Verifying that a cluster has been created

When a cluster is created correctly you will see a log indicating that one of your Fishjams connected to the other one, e.g.:

```
[info] [libcluster:epmd_cluster] connected to :"f1@127.0.0.1"
```

To see clustering in action, create two rooms using the same Fishjam address and observe how they are load balanced:

```bash
curl -X POST -H "authorization: Bearer development" http://localhost:4002/room
# {"data":{"fishjam_address":"localhost:4001"}}
```

```bash
curl -X POST -H "authorization: Bearer development" http://localhost:4002/room
# {"data":{"fishjam_address":"localhost:4002"}}
```

Load balancing can also be tested using [Fishjam Dashboard](https://github.com/fishjam-dev/fishjam-dashboard).
See [here](./tutorials/dashboard#loadbalancing-in-dashboard) for more information.

## Deeper dive into Erlang Distribution

The most tricky thing when running Fishjam in a cluster is to understand the role of EPMD.
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
* it is started automatically when running Fishjam
* there is one EPMD per machine or one EPMD per docker container - 
that's why we can't simulate Global Docker setup locally

You can read more about Erlang Distribution [here](https://www.erlang.org/doc/reference_manual/distributed.html).
