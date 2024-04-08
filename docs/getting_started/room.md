# Room

The holder for peers and components.

## Configuration options

**Optional**

* `roomId` (string, default: null) - Custom ID used for identifying the room within Jellyfish.
  Must be unique across all rooms. If not provided, a random UUID will be generated. 
  It may contain only alphanumeric characters and hyphens.

* `maxPeers` (integer 1.., default: null) - Maximum number of peers allowed in the room.
  If set to null (default), the number of peers is unlimited.

* `videoCodec` (string "h264" or "vp8", default: null) - Video codec enforced for each peer and component in the room.
  If set to null (default), no codec is enforced (peers and components may publish both H264 and VP8).

* `webhookUrl` (string, default: null) - If provided, Jellyfish notifications will be sent to this URL.

* `peerlessPurgeTimeout` (integer 1.., default: null) - Duration (in seconds) after which the room
  will be removed if no peers are connected. If set to null (default), this feature is disabled.
