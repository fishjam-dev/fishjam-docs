import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

There are two ways of running Jellyfish:
* building from source (requires Elixir and native dependencies)
* using Jellyfish Docker images

At the moment, Jellyfish doesn't provide pre-built binaries.

## Building from source

Make sure to have both Elixir and Rust installed. Check the links below for instructions:
* [Elixir](https://elixir-lang.org/install.html)
* [Rust](https://rustup.rs)

**Clone the Jellyfish repo**
```
git clone https://github.com/jellyfish-dev/jellyfish.git
```

**Install native dependencies**

<Tabs>
  <TabItem value="mac-intel" label="macOS Intel" default>
  These instructions assume you have Homebrew installed. You can get it <a href="https://brew.sh">here</a>.

  ```
  brew install srtp libnice clang-format ffmpeg opus pkg-config
  export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
  export CFLAGS="-I/usr/local/opt/openssl@1.1/include/"
  export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include/"
  export PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"
  ```

  </TabItem>
  <TabItem value="mac-m1" label="macOS Apple Silicon" default>
  These instructions assume you have Homebrew installed. You can get it <a href="https://brew.sh">here</a>.

  ```
  brew install srtp libnice clang-format ffmpeg opus
  export C_INCLUDE_PATH=/opt/homebrew/Cellar/libnice/0.1.18/include:/opt/homebrew/Cellar/opus/1.3.1/include:/opt/homebrew/Cellar/openssl@1.1/1.1.1l_1/include
  export LIBRARY_PATH=/opt/homebrew/Cellar/opus/1.3.1/lib
  export PKG_CONFIG_PATH=/opt/homebrew/Cellar/openssl@1.1/1.1.1l_1/lib/pkgconfig/
  ```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu" default>

  ```
  sudo apt install pkg-config libsrtp2-dev libnice-dev libavcodec-dev libavformat-dev libavutil-dev libopus-dev libfdk-aac-dev
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

You can also create Jellyfish binary with:

```
MIX_ENV=prod mix release
```

Then follow instructions printed in your terminal.

:::info

The difference between running with `mix phx.server` and generating target
binary is that the latter is prepared for running in production so e.g.
it includes some Erlang Virtual Machine tweaks.
Jellyfish Dockerfile always uses `mix release` under the hood.

:::

## Running with Docker

Docker images are built for production which means that you always
need to set a couple of [environment variables](#environment-variables).

An example docker command running bare Jellyfish HTTP service locally:

```bash
docker run -p 8080:8080/tcp -e JF_HOST=localhost:8080 JF_SERVER_API_TOKEN=token ghcr.io/jellyfish-dev/jellyfish:0.2.0
```

Note that in real case scenarios, docker commands depend on peers/components you are going to use.
Therefore, we don't present them here but rather in each peer/component's documentation.
As an example see [WebRTC Peer](./peers/webrtc#example-docker-commands).

For the full list of Jellyfish Docker images, [see this page](https://github.com/jellyfish-dev/jellyfish/pkgs/container/jellyfish).

:::tip

Instead of passing environmental variables manually, you can use the `--env-file ./env-file` flag,
where the `env-file` is a file containing the variables that the image expects,
see example file `.env.sample` in the Jellyfish repository.

:::

## Environment variables

Environment variables are split into two groups:
* general ones - presented below
* peer/component-specific - each Peer and Component can expose its own environment variables.
They are always listed in a Peer/Component description.
See the list of [Peers](./peers/webrtc.md) and [Components](./components/hls.md).

Below there are general, Jellyfish environment variables.
If you are running Jellyfish in development, you don't need to
set any of them.

#### Required in production:

* `JF_SERVER_API_TOKEN` - token for authorizing HTTP requests.<br/>
Defaults to `development` for development builds.
* `JF_HOST` - defines how Jellyfish should be seen from the outside.<br/>
Defaults to `JF_IP:JF_PORT`.<br/>
It can be in the form of `ip:port`, `domain:port` or simply `domain`.
Useful when hosting Jellyfish behind proxy.
It is returned e.g. when creating a new room.
When running with Docker, `JF_IP` is set to `0.0.0.0`
making the default value of `JF_HOST` incorrect.
Therefore, for Docker, you have to set `JF_HOST` manually.
For running Docker locally, it can simply be `localhost:8080`.

#### Optional:

* `JF_IP` - an ip address to run the HTTP server on.<br/>
Defaults to `127.0.0.1` when running from source or using `mix release`, or `0.0.0.0` for Docker.
* `JF_PORT` - port to run the HTTP server on.<br/>
Defaults to `5002` for development builds and `8080` for production builds (`mix release` or Docker).
* `JF_SECRET_KEY_BASE` - used to sign/encrypt tokens generated for Peers.
Generated if not provided.
* `JF_CHECK_ORIGIN` - defines if Jellyfish will check the origin of incoming requests and socket connection. <br/>
Defaults to `true`.<br/>
Possible values are `true`, `false` or a space-separated list of allowed origins (wildcards are allowed). <br/>
Example: `JF_CHECK_ORIGIN="https://example.com //another.com:888 //*.other.com"`
* `JF_OUTPUT_BASE_PATH` - a base path where Jellyfish will save its artifacts.<br/>
Defaults to `./jellyfish_output/`.<br/>
When running via docker, the directory can be mounted as `-v $(pwd)/host_directory:/app/jellyfish_output`.
* `JF_METRICS_IP` - an IP address to run metrics endpoint on.<br/>
Defaults to `127.0.0.1` when running from source or using `mix release`, or `0.0.0.0` for Docker.
* `JF_METRICS_PORT` - a port to run metrics endpoint on.<br/>
Defaults to `9568`.
* `MIX_ENV` - defines compilation environment.
This variable takes effect only when running from the source.
Docker images are always built with `MIX_ENV=prod`.
Possible values are:
  * `dev` - uses default values for environment variables
  (default option when running with `mix phx.server`)
  * `prod` - requires that you provide values for environment variables
  * `test` - used in tests

#### Distribution:

* `JF_DIST_ENABLED` - whether to run Jellyfish in a cluster.<br/>
Defaults to `false`.
* `JF_DIST_STRATEGY_NAME` - specify which clustering strategy to use.<br/>
Possible values are `DNS` or `NODES_LIST`. 
Defaults to `NODES_LIST`.
* `JF_DIST_NODE_NAME` - Node name used in a cluster.
It consists of two parts - nodename@hostname.
The first part identifies a node on a single machine and can
be any string.
The second part identifies the host machine and has to be an 
ip address or FQDN of a machine Jellyfish runs on.
If you run a cluster on a single machine or in the same docker network
and you don't want to use IP addresses or FQDN as hostnames, 
you can use short names (see `JF_DIST_MODE`).
* `JF_DIST_MODE` - distribution mode - can be `name` or `sname`.<br/>
Defaults to `name`.<br/>
When using `name`, your hostname has to be an IP address or FQDN of a machine Jellyfish runs on.
When using `sname`, your hostname can be any string.
See our [docker-compose.yaml](https://github.com/jellyfish-dev/jellyfish/blob/main/docker-compose.yaml), which we use in our integration tests for an example.
* `JF_DIST_COOKIE` - used to group Jellyfishes in a cluster.<br/>
Defaults to `jellyfish_cookie`.<br/>
Use different cookies to create multiple clusters on the same machine.<br/>
**Important**: cookie does not provide any cryptographic security.
Its only purpose is to prevent a node from connecting to a cluster with which 
it is not intended to communicate.
* `JF_DIST_MIN_PORT`- minimal port used by Jellyfish when forming a cluster
(connecting to other Jellyfishes).<br/>
Defaults to `9000` when running with Docker.<br/>
Only available when running with Docker or `mix release`.
* `JF_DIST_MAX_PORT`- maximal port used by Jellyfish when forming a cluster
(connecting to other Jellyfishes).<br/>
Defaults to `9000` when running with Docker.<br/>
Only available when running with Docker or `mix release`.

###### Distribution NODES_LIST specific:
* `JF_DIST_NODES` - space-separated list of other Jellyfishes to connect to.<br/>
Defaults to `""`.<br/>
Example: `JF_DIST_NODES="jellyfish1@127.0.0.1 jellyfish2@127.0.0.1"`.<br/>
This list can also include ourselves so that you can pass the same value
to every Jellyfish.
Note: Jellyfish connection to other Jellyfish is transitive meaning that
when you connect to one Jellyfish you also connect to all other Jellyfishes
this one was connected to.

###### Distribution DNS specific:
* `JF_DIST_QUERY` - query which is sent do DNS. <br/>
Returned list of IPs from DNS is used for creating distribution node name in the format `<NODE_BASENAME>@<IP_ADDRESS>`.  
* `JF_DIST_POLLING_INTERVAL` - DNS polling interval in ms. <br/> 
Default value is 5000.

:::tip

You can use a single port to form a cluster, even if a cluster consists of
more than two Jellyfishes. 

:::

:::caution

Besides ports specified using `JF_DIST_MIN_PORT` and `JF_DIST_MAX_PORT`, Jellyfish
also uses one more service called EPMD that runs on port 4369.
This port has to be explicitly exported when running with Docker.
Read more in the [Cluster](../cluster.md) section.

:::


