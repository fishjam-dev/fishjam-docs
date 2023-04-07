# WebRTC

WebRTC peer allows you to connect to Jellyfish via WebRTC standard.

## Compatibility

* [HLS](../components/hls.md)

## Env variables:

* `WEBRTC_USED` - has to be `true` if WebRTC peers will be used
* `INTEGRATED_TURN_IP` - the IP address, on which TURN servers will listen. 
By default set to `127.0.0.1`.
When running Jellyfish via Docker, this MUST be set to real (non-loopback) address, even for local tests.
* `INTEGRATED_TURN_PORT_RANGE` - port range, where UDP TURN will try to open ports. By default set to `50000-59999`.
The bigger the range is, the more users server will be able to handle. 
Useful when not using the `--network=host` option to limit the UDP ports 
used only to ones published from a Docker container.
* `INTEGRATED_TCP_TURN_PORT` - port number of TCP TURN
* `INTEGRATED_TLS_TURN_PORT` - port number of TLS TURN, used when `INTEGRATED_TURN_PKEY` and `INTEGRATED_TURN_CERT` are provided
* `INTEGRATED_TURN_CERT` - SSL certificate for TLS TURN
* `INTEGRATED_TURN_PKEY` - SSL private key for TLS TURN

## Example docker command

Explicit port exposure (macOS compatible)

```bash
docker run -p 50000-50050:50000-50050/udp \
           -p 4000:4000/tcp \
           -e INTEGRATED_TURN_PORT_RANGE=50000-50050 \
           -e INTEGRATED_TURN_IP=192.168.0.1 \
           -e TOKEN=token \
           -e VIRTUAL_HOST=localhost \
           -e SECRET_KEY_BASE=secret \
           ghcr.io/jellyfish-dev/jellyfish:latest
```

:::caution

Make sure that the exposed UDP ports match `INTEGRATED_TURN_PORT_RANGE`. Range of the ports shouldn't be too wide as it might
cause problems with container startup.

:::

Using host network (Linux only)

```bash
docker run --network=host \
           -e INTEGRATED_TURN_IP=192.168.0.1 \ 
           -e VIRTUAL_HOST=localhost \
           -e SECRET_KEY_BASE=secret \
           ghcr.io/jellyfish-dev/jellyfish:latest
```
