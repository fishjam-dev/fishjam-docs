# RTSP

Consumes a remote RTSP stream (e.g. from an IP camera).
The RTSP component initializes communication by connecting to
a remote source and requesting its stream.

## Compatibility

* [HLS](./hls.md)

## Configuration options

### Required

* `sourceUri` (string) - URI of RTSP source stream, e.g. `"rtsp://mysite.net:554/stream"`

### Additional

* `rtpPort` (integer 1..65535, default: 20000) - Local port RTP stream will be received at
* `maxReconnectAttempts` (integer 0.., default: 3) - How many times the component
  will attempt to reconnect before hibernating
* `reconnectDelay` (integer 0.., default: 15000) - Delay (in ms) between successive reconnect attempts
* `keepAliveInterval` (integer 0.., default: 15000) - Interval (in ms) in which keep-alive
  RTSP messages will be sent to the remote stream source
* `pierceNat` (boolean, default: true) - Whether to attempt to create client-side NAT binding
  by sending an empty datagram from client to source, after the completion of RTSP setup

## Env variables

Currently, there are no environment variables related to this component.

## Example Docker commands

:::caution

If the client is behind NAT, the option `--network=host` is necessary
since Docker can change the source port of UDP packets for routing reasons,
which breaks the `pierceNat` functionality.

This means that users on macOS will most likely be unable to access any
RTSP stream source outside of their network when running Jellyfish using Docker.

If you're on macOS and want to receive RTSP streams from behind NAT,
right now the only way is to [build Jellyfish natively from source](../installation.md#building-from-source).

:::

Explicit port exposure (macOS compatible)

```bash
docker run -p 20000:20000/udp \
           -p 4000:4000/tcp \
           -e SERVER_API_TOKEN=token \
           -e VIRTUAL_HOST=localhost \
           -e SECRET_KEY_BASE=secret \
           ghcr.io/jellyfish-dev/jellyfish:latest
```

:::caution

Make sure that the exposed UDP port matches the one used by the RTSP component
(option `rtpPort`, default: 20000).

If using multiple RTSP components, more ports will need to be exposed.

:::

Using host network (Linux only)

```bash
docker run --network=host \
           -e SERVER_API_TOKEN=token \
           -e VIRTUAL_HOST=localhost \
           -e SECRET_KEY_BASE=secret \
           ghcr.io/jellyfish-dev/jellyfish:latest
```
