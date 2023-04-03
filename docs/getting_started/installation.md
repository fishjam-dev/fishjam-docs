import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Installation

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