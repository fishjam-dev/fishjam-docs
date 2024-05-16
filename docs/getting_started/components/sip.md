# SIP

Makes a SIP connection with the specified provider.
From this connection it consumes a remote RTP stream with G711 A-law audio
and publishes through this connection all audio tracks from the [Room](../room.md).

Read more about SIP [here](https://www.rfc-editor.org/rfc/rfc3261.html).

## Compatibility

* [WebRTC](../peers/webrtc.md)
* [HLS](./hls.md)
* [RTSP](./rtsp.md)
* [File](./file.md)
* [Recording](./recording.md)


## Requirements
* The specified SIP provider needs to support G711 A-law as it will be a format in which audio from
SIP Endpoint will be published.


## Configuration options

**Required**

* `registrarCredentials` (object) - registrar credentials which allows to make a connection with a SIP provider.
  For the exact credential structure see [Configuration API](../../for_developers/api_reference/rest_api#tag/room/operation/add_component).

## Env variables

* `FJ_SIP_USED` - has to be `true` if SIP component will be used
* `FJ_SIP_IP` - the IP address on which SIP server will listen. It must be a public IP and reachable from the outside network. 
