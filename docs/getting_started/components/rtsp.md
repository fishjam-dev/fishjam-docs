# RTSP (in progress)

Consumes a remote RTSP stream (e.g. from an IP camera).
The RTSP component initializes communication by connecting to
a remote source and requesting its stream.

## Compatibility

* [HLS](./hls.md)

## Configuration options

### Required

* `sourceUri` (string): URI of RTSP source stream, e.g. `"rtsp://mysite.net:554/stream"`

### Additional

* `rtpPort` (integer 1..65535, default: 20000): Local port RTP stream will be received at
* `maxReconnectAttempts` (integer 0.., default: 3): How many times the component
  will attempt to reconnect before hibernating
* `reconnectDelay` (integer 0.., default: 15000): Delay (in ms) between successive reconnect attempts
* `keepAliveInterval` (integer 0.., default: 15000): Interval (in ms) in which keep-alive
  RTSP messages will be sent to the remote stream source
* `pierceNat` (boolean, default: true): Whether to attempt to create client-side NAT binding
  by sending an empty datagram from client to source, after the completion of RTSP setup

## Env variables

Currently, there are no environment variables related to this component.

## Example Docker commands

TODO
