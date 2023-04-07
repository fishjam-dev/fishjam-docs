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
