# SIP

Makes a SIP connection with specified provider.
From this connection it consumes a remote RTP stream with G711 A-law audio
and publishes through this connection all audio tracks from engine.

Supports OPUS streams only.

Read more about SIP [here](https://www.rfc-editor.org/rfc/rfc3261.html).

## Compatibility

* [WebRTC](../peers/webrtc.md)
* [HLS](./hls.md)
* [RTSP](./rtsp.md)
* [File](./file.md)

## Requirements
* The specified SIP provider needs to support G711 A-law as it will be a format in which audio from
SIP Endpoint will be published.


## Configuration options

**Required**

* `registrarCredentials` (object) - registrar credentials which allows to make a connection with a SIP provider.

## Env variables

* `JF_SIP_USED` - has to be `true` if SIP component will be used
* `JF_SIP_IP` - the IP address on which SIP server will listen. It must be a public IP and reachable from the outside network. 
