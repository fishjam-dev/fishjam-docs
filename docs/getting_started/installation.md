import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

There are two ways of running Jellyfish:
* building from source (requires Elixir and native dependencies)
* using Jellyfish Docker images

At the moment, Jellyfish doesn't provide pre-built binaries.

## Building from source

Make sure to have Elixir installed. If not, you can do it [here](https://elixir-lang.org/install.html).

**Clone the Jellyfish repo**
```
git clone https://github.com/jellyfish-dev/jellyfish.git
```

**Install native dependencies**

<Tabs>
  <TabItem value="mac-intel" label="macOS Intel" default>

  ```
  brew install srtp libnice clang-format ffmpeg opus pkg-config
  export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
  export CFLAGS="-I/usr/local/opt/openssl@1.1/include/"
  export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include/"
  export PKG_CONFIG_PATH="/usr/local/opt/openssl@1.1/lib/pkgconfig"
  ```

  </TabItem>
  <TabItem value="mac-m1" label="macOS Apple Silicon" default>

  ```
  brew install srtp libnice clang-format ffmpeg opus
  export C_INCLUDE_PATH=/opt/homebrew/Cellar/libnice/0.1.18/include:/opt/homebrew/Cellar/opus/1.3.1/include:/opt/homebrew/Cellar/openssl@1.1/1.1.1l_1/include
  export LIBRARY_PATH=/opt/homebrew/Cellar/opus/1.3.1/lib
  export PKG_CONFIG_PATH=/opt/homebrew/Cellar/openssl@1.1/1.1.1l_1/lib/pkgconfig/
  ```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu" default>

  ```
  sudo apt-get install libsrtp2-dev libnice-dev libavcodec-dev libavformat-dev libavutil-dev libopus-dev
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

## Running with Docker

Docker images are built for production which means that you always
need to set a couple of environment variables.

Environment variables are split into two groups:
* general ones - see [General env variables](#env-variables) below
* peer/component-specific - each Peer and Component can expose its own environment variables.
They are always listed in a Peer/Component description.
See the list of [Peers](./peers/webrtc.md) and [Components](./components/hls.md).

As docker commands depend on peers/components you are going to use, we don't present
them here but rather in each peer/component's documentation.

For the full list of Jellyfish Docker images, [see this page](https://github.com/jellyfish-dev/jellyfish/pkgs/container/jellyfish).

:::tip

Instead of passing environmental variables manually, you can use the `--env-file ./env-file` flag, 
where the `env-file` is a file containing the variables that the image expects, 
see example file `.env.sample` in the Jellyfish repository.

:::

## General env variables

Below there are general, Jellyfish environment variables.
If you are running Jellyfish in development, you don't need to 
set any of them.

* `MIX_ENV` - defines compilation mode.
This variable takes effect only when running from the source.
Docker images are built with `MIX_ENV=prod`.
Possible values are:
  * `dev` - uses default values for environment variables 
  (default option when running with `mix phx.server`)
  * `prod` - requires you to provide values for environment variables
  * `test` - used in tests
* `SERVER_API_TOKEN` - token for authorizing HTTP requests. Defaults to `development` for
development builds.
* `AUTH_SALT` - used to sign/encrypt tokens generated for Peers.
* `SECRET_KEY_BASE` - used to sign/encrypt cookies and other secrets.
* `VIRTUAL_HOST` - host passed to the endpoint config. Defaults to `example.com` for production builds.
* `PORT` - port to run the HTTP server. Defaults to `4000` both for development and production builds.