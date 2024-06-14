import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

There are two ways of running Fishjam:
* building from source (requires Elixir and native dependencies)
* using Fishjam Docker images

At the moment, Fishjam doesn't provide pre-built binaries.

## Building from source

Make sure to have both Elixir and Rust installed. Check the links below for instructions:
* [Elixir](https://elixir-lang.org/install.html)
* [Rust](https://rustup.rs)

**Clone the Fishjam repo**
```
git clone https://github.com/fishjam-dev/fishjam.git
```

**Install native dependencies**

<Tabs>
  <TabItem value="mac-os" label="macOS Intel/Apple Silicon" default>
  These instructions assume you have Homebrew installed. You can get it <a href="https://brew.sh">here</a>.

  ```
  brew install srtp clang-format ffmpeg opus pkg-config
  # additionally, you might need to export these env vars
  export C_INCLUDE_PATH=$(brew --prefix opus)/include:$(brew --prefix openssl)/include
  export LIBRARY_PATH=$(brew --prefix opus)/lib:$(brew --prefix openssl)/lib
  export PKG_CONFIG_PATH=$(brew --prefix openssl)/lib/pkgconfig
  ```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu" default>

  ```
  sudo apt install pkg-config libsrtp2-dev libavcodec-dev libavformat-dev libavutil-dev libopus-dev libfdk-aac-dev
  ```

  </TabItem>
</Tabs>

**Install elixir dependencies**

```
mix deps.get
```

**Run the server in development**

```
mix phx.server
```

**Create a binary**

You can also create Fishjam binary with:

```
MIX_ENV=prod mix release
```

Then follow instructions printed in your terminal.

:::info

The difference between running with `mix phx.server` and generating target
binary is that the latter is prepared for running in production so e.g.
it includes some Erlang Virtual Machine tweaks.
Fishjam Dockerfile always uses `mix release` under the hood.

:::

## Running with Docker

Docker images are built for production which means that you always
need to set a couple of [environment variables](#environment-variables).

An example docker command running bare Fishjam HTTP service locally:

```bash
docker run -p 8080:8080/tcp -e FJ_HOST=localhost:8080 -e FJ_SERVER_API_TOKEN=token ghcr.io/fishjam-dev/fishjam:0.6.2
```

Note that in real case scenarios, docker commands depend on peers/components you are going to use.
Therefore, we don't present them here but rather in each peer/component's documentation.
As an example see [WebRTC Peer](./peers/webrtc#example-docker-commands).

For the full list of Fishjam Docker images, [see this page](https://github.com/fishjam-dev/fishjam/pkgs/container/fishjam).

:::tip

Instead of passing environmental variables manually, you can use the `--env-file ./env-file` flag,
where the `env-file` is a file containing the variables that the image expects,
see example file `.env.sample` in the Fishjam repository.

:::

## Environment variables

Environment variables are split into two groups:
* general ones - presented below
* peer/component-specific - each Peer and Component can expose its own environment variables.
They are always listed in a Peer/Component description.
See for example the list of [Peers](./peers/webrtc.md) and [SIP Component](./components/sip.md).

Below there are general, Fishjam environment variables.
If you are running Fishjam in development, you don't need to
set any of them.

#### Required in production:

* `FJ_SERVER_API_TOKEN` - token for authorizing HTTP requests.<br/>
Defaults to `development` for development builds.

* `FJ_HOST` - defines how Fishjam should be seen from the outside.<br/>
Defaults to `FJ_IP:FJ_PORT`.<br/>
It can be in the form of `ip:port`, `domain:port` or simply `domain`.
Additionally, you can specify a path (e.g. `ip:port/path`, `domain:port/path`, `domain/path`).
Useful when hosting Fishjam behind proxy.
It is returned e.g. when creating a new room.
When running with Docker, `FJ_IP` is set to `0.0.0.0`
making the default value of `FJ_HOST` incorrect.
Therefore, for Docker, you have to set `FJ_HOST` manually.
For running Docker locally, it can simply be `localhost:8080`.

#### Optional:

* `FJ_COMPONENTS_USED` - defines which components can be added to rooms on this Fishjam.<br/>
Defaults to an empty string, i.e. all components are disabled globally.<br/>
The format is a space-separated list of allowed component types written in lowercase.<br/>
Example: `FJ_COMPONENTS_USED="hls rtsp sip"`.

* `FJ_IP` - an ip address to run the HTTP server on.<br/>
Defaults to `127.0.0.1` when running from source or using `mix release`, or `0.0.0.0` for Docker.

* `FJ_PORT` - port to run the HTTP server on.<br/>
Defaults to `5002` for development builds and `8080` for production builds (`mix release` or Docker).

* `FJ_SSL_KEY_PATH` - an absolute path to the SSL key.
When both `FJ_SSL_KEY_PATH` and `FJ_SSL_CERT_PATH` are set, Fishjam will
run HTTPS server instead of HTTP one.
An address where this server listens to is still configured via `FJ_IP` and `FJ_PORT`.

* `FJ_SSL_CERT_PATH` - an absolute path the the SSL certificate.
When both `FJ_SSL_KEY_PATH` and `FJ_SSL_CERT_PATH` are set, Fishjam will
run HTTPS server instead of HTTP one.
An address where this server listens to is still configured via `FJ_IP` and `FJ_PORT`.

* `FJ_SECRET_KEY_BASE` - used to sign/encrypt tokens generated for Peers.
Generated if not provided.

* `FJ_CHECK_ORIGIN` - defines if Fishjam will check the origin of incoming requests and socket connection. <br/>
Defaults to `true`.<br/>
Possible values are `true`, `false` or a space-separated list of allowed origins (wildcards are allowed). <br/>
Example: `FJ_CHECK_ORIGIN="https://example.com //another.com:888 //*.other.com"`

* `FJ_RESOURCES_BASE_PATH` - a base path where Fishjam multimedia files are stored<br/>
Defaults to `./fishjam_resources/`.<br/>
When running via docker, the directory can be mounted as `-v $(pwd)/host_directory:/app/fishjam_resources`.

* `FJ_METRICS_IP` - an IP address to run metrics endpoint on.<br/>
Defaults to `127.0.0.1` when running from source or using `mix release`, or `0.0.0.0` for Docker.

* `FJ_METRICS_PORT` - a port to run metrics endpoint on.<br/>
Defaults to `9568`.

* `FJ_LOG_LEVEL` - level of logs below which all logs will not be displayed. <br/>
Defaults to `info`.<br/>
All possible values are: `error`, `warning`, `info`, `debug`.

* `FJ_STRUCTURED_LOGGING` - whether to enable JSON-structured logging to stdout.<br/>
Defaults to `false`.<br/>
Possible values of the `severity` field (ordered by importance) are:
  * `error`
  * `warning`
  * `info`
  * `debug` (disabled by default)

For more information about these log levels, refer [here](https://hexdocs.pm/logger/1.15/Logger.html#module-levels).<br/>
Example log with and without this option:
<Tabs>
  <TabItem value="json-log-on" label="true" default>

  ```json
  {"time":"2024-02-20T17:32:32.448Z","severity":"info","message":"Initialize room","metadata":{"room_id":"da2e-4a75-95ff-776bad2caf04-666973686a616d4031302e302e302e31"}}
  ```

  </TabItem>
  <TabItem value="json-log-off" label="false" default>

  ```
  17:32:32.448 room_id=da2e-4a75-95ff-776bad2caf04-666973686a616d4031302e302e302e31 [info] Initialize room
  ```

  </TabItem>
</Tabs>

* `MIX_ENV` - defines compilation environment.
This variable takes effect only when running from the source.
Docker images are always built with `MIX_ENV=prod`.
Possible values are:
  * `dev` - uses default values for environment variables
  (default option when running with `mix phx.server`)
  * `prod` - requires that you provide values for environment variables
  * `test` - used in tests

#### Distribution:

* `FJ_DIST_ENABLED` - whether to run Fishjam in a cluster.<br/>
Defaults to `false`.

* `FJ_DIST_STRATEGY_NAME` - specify which clustering strategy to use.<br/>
Possible values are `DNS` or `NODES_LIST`. 
Defaults to `NODES_LIST`.

* `FJ_DIST_NODE_NAME` - Node name used in a cluster.
Defaults to `fishjam@(hostname)`. <br/>
It consists of two parts - nodename@hostname.
The first part identifies a node on a single machine and can
be any string.
The second part identifies the host machine fishjam runs on and has to be resolvable.
Its format depends on `FJ_DIST_MODE`.
If `FJ_DIST_MODE` is set to `name`, the `hostname` has to be an IP address or FQDN.
If `FJ_DIST_MODE` is set to `sname`, the `hostname` can be any string.
If you run a cluster using `DNS` strategy, every Fishjam instance must have `nodename` set to the same value.
If `hostname` is not an IP address, it will be automatically resolved as DNS strategy requires
node names to use IP addresses.
This also means that `DNS` strategy has to be run with `FJ_DIST_MODE` set to `name`.
See our [docker-compose-epmd.yaml](https://github.com/fishjam-dev/fishjam/blob/main/docker-compose-epmd.yaml) or [docker-compose-dns.yaml](https://github.com/fishjam-dev/fishjam/blob/main/docker-compose-dns.yaml), which we use in our integration tests or refer to [Cluster](../cluster.md) section for examples.

* `FJ_DIST_MODE` - distribution mode - can be `name` or `sname`.<br/>
Defaults to `sname`.<br/>
When using `name`, your hostname has to be an IP address or FQDN of a machine Fishjam runs on.
When using `sname`, your hostname can be any string.
See `FJ_DIST_NODE_NAME` for more information.

* `FJ_DIST_COOKIE` - used to group Fishjams in a cluster.<br/>
Defaults to `fishjam_cookie`.<br/>
Use different cookies to create multiple clusters on the same machine.<br/>
**Important**: cookie does not provide any cryptographic security.
Its only purpose is to prevent a node from connecting to a cluster with which 
it is not intended to communicate.

* `FJ_DIST_MIN_PORT`- minimal port used by Fishjam when forming a cluster
(connecting to other Fishjams).<br/>
Defaults to `9000` when running with Docker.<br/>
Only available when running with Docker or `mix release`.

* `FJ_DIST_MAX_PORT`- maximal port used by Fishjam when forming a cluster
(connecting to other Fishjams).<br/>
Defaults to `9000` when running with Docker.<br/>
Only available when running with Docker or `mix release`.

###### Distribution NODES_LIST specific:
* `FJ_DIST_NODES` - space-separated list of other Fishjams to connect to.<br/>
Defaults to `""`.<br/>
Example: `FJ_DIST_NODES="fishjam1@127.0.0.1 fishjam2@127.0.0.1"`.<br/>
This list can also include ourselves so that you can pass the same value
to every Fishjam.
Note: Fishjam connection to other Fishjam is transitive meaning that
when you connect to one Fishjam you also connect to all other Fishjams
this one was connected to.

###### Distribution DNS specific:
* `FJ_DIST_QUERY` - query sent to DNS to discover other Fishjams. <br/>
Returned list of IPs from DNS is used for creating distribution node name in the format `<nodename>@<IP_ADDRESS>`.  

* `FJ_DIST_POLLING_INTERVAL` - DNS polling interval in ms. <br/> 
Default value is 5000.

:::tip

You can use a single port to form a cluster, even if a cluster consists of
more than two Fishjams. 

:::

:::caution

Besides ports specified using `FJ_DIST_MIN_PORT` and `FJ_DIST_MAX_PORT`, Fishjam
also uses one more service called EPMD that runs on port 4369.
This port has to be explicitly exported when running with Docker.
Read more in the [Cluster](../cluster.md) section.

:::

#### Feature flags:

:::caution

The features hidden behind these flags are experimental and may change at any moment.

:::

* `FJ_FEATURE_FLAG_REQUEST_ROUTING_ENABLED` - when toggled, every Fishjam in the cluster
will be able to handle requests pertaining to every room in the cluster,
even if that room is on another Fishjam instance. <br/>
Defaults to `false`. <br/>
Caution: With this feature enabled, setting custom room names is no longer allowed -
they will instead be generated based on the node name of the Fishjam that holds the room.
