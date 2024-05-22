# WebRTC

WebRTC peer allows you to connect to Fishjam via WebRTC standard.

Read more about WebRTC [here](https://webrtc.org/).

## Compatibility

* [HLS](../components/hls.md)
* [RTSP](../components/rtsp.md)
* [File](../components/file.md)
* [SIP](../components/sip.md)

## Configuration options

**Optional**

* `enableSimulcast` (boolean, default: true) - Enables the peer to use simulcast

## Env variables

* `FJ_WEBRTC_USED` - has to be `true` if WebRTC peers will be used.
By default set to `true`.

* `FJ_WEBRTC_TURN_LISTEN_IP` - the IP address on which TURN servers will listen. 
By default set to `127.0.0.1`.
When running Fishjam via Docker, this MUST be set to `0.0.0.0`, even for local tests.
You may also set this env variable to a hostname which will get resolved at JF startup.

* `FJ_WEBRTC_TURN_IP` - the IP address, under which TURN will present itself to the clients. By default set to `127.0.0.1`.
When running Fishjam via Docker, this MUST be set to real (non-loopback) address, even for local tests.

* `FJ_WEBRTC_TURN_PORT_RANGE` - port range, where UDP TURN will try to open ports. By default set to `50000-59999`.
The bigger the range is, the more users server will be able to handle. 
Useful when not using the `--network=host` option to limit the UDP ports 
used only to ones published from a Docker container.

* `FJ_WEBRTC_TURN_TCP_PORT` - port number of TCP TURN

## Example Docker commands

Explicit port exposure (macOS compatible)

```bash
docker run -p 50000-50050:50000-50050/udp \
           -p 8080:8080/tcp \
           -e FJ_SERVER_API_TOKEN=token \
           -e FJ_HOST=localhost:8080 \
           -e FJ_WEBRTC_USED=true \
           -e FJ_WEBRTC_TURN_PORT_RANGE=50000-50050 \
           -e FJ_WEBRTC_TURN_IP=192.168.0.1 \
           -e FJ_WEBRTC_TURN_LISTEN_IP=0.0.0.0 \
           ghcr.io/fishjam-dev/fishjam:0.6.2
```

:::caution

Make sure that the exposed UDP ports match `FJ_WEBRTC_TURN_PORT_RANGE`.
The range of the ports shouldn't be too wide as it might cause problems with container startup.

:::

Using host network (Linux only)

```bash
docker run --network=host \
           -e FJ_SERVER_API_TOKEN=token \
           -e FJ_HOST=localhost:8080 \
           -e FJ_WEBRTC_USED=true \
           -e FJ_WEBRTC_TURN_IP=192.168.0.1 \
           -e FJ_WEBRTC_TURN_LISTEN_IP=0.0.0.0 \
           ghcr.io/fishjam-dev/fishjam:0.6.2
```
