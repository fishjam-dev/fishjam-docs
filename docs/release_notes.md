# Release Notes

## 0.4.1 - 06.03.2024

### Bugfixes:
* API spec fixes - now correct version of OpenAPI is shown in docs
* Fixed peer being removed once it disconnects from Jellyfish

## 0.4.0 - 27.02.2024

**IMPORTANT** This version might require clearing or updating env vars when running from source on macOS.
See [here](./getting_started/installation.md#building-from-source).

### Features:
* added peer websocket close reason - now, server closes peer websocket with a reason e.g. "Internal server error", "Peer removed" or "Room stopped"
* added support for path in [JF_HOST](./getting_started/installation#required-in-production) env var
* added framerate option in the [File component](./getting_started/components/file#configuration-options) -  defaults to 30 FPS
* added healthcheck endpoint - [GET /health](./for_developers/api_reference/rest_api#tag/health/) - requires authorization and returns: status, uptime and information about distribution (enabled/disabled, node status, number of nodes in a cluster).
* added published tracks and their metadata to the REST API e.g. [GET /room](./for_developers/api_reference/rest_api#tag/room) will return a list of rooms with their components and peers, where each component and each peer will also list all of its published tracks
* added new server notifications: `PeerMetadataUpdated`, `TrackAdded`, `TrackRemoved`, `TrackMetadataUpdated`
* added peerless room purge option - after predefined amount of time, if a room is empty, it will be automatically closed. This behaviour is disabled by default. See [here](./getting_started/room#configuration-options).
* added [SIP component](./getting_started/components/sip). This might require 
clearing or updating env vars when running from source on macOS. See [here](./getting_started/installation.md#building-from-source). **[BREAKING]**
* added basic structured logging that can be enabled with [`JF_STRUCTURED_LOGGING`](./getting_started/installation#optional)
* added python RTSP -> HLS example

### Bugfixes:
* fixed duplicated `peer_disconnected` notification
* fixed prometheus metrics not being reset - now, after room is removed, its metrics are set to 0
* fixed starting logs not being displayed when JF couldn't run in a distributed mode - now, even if JF crashes because of distribution-related problems, config logs will be displayed (i.e. JF version, WebRTC config, distribution config)
* fixed removing component, which crashed from JF state (thanks to @gfodor) 
* fixed removing component, which finished its work from JF state
* fixed authorization not required for /hls and /recording endpoints **[BREAKING]**
* fixed authorization information in OpenAPI spec - previously, all endpoints were marked as requiring authorization, even if they didn't actually need it


## 0.3.0 - 09.01.2024

### Features:
* added `persistent` and `targetWindowDuration` options for HLS component
* added VOD HLS (aka HLS recordings) - allows to play out HLS stream recorded with `persistent` set to `true`
* added support for uploading HLS recordings to S3
* added manual subscription mode for HLS - from now, you can manually instruct HLS component when it should start recording tracks from a given peer or component
* added File component, which allows for publishing tracks from a file
* added ability to assign custom room ID
* added (LL)HLS benchmarks
* added WebRTC benchmarks
* added new ingress/egress traffic metrics for WebRTC and HTTP
* removed metrics per second **[BREAKING]** - user is expected to calculate those metrics on their own
* removed total ingress/egress traffic metrics **[BREAKING]** - user is expected to calculate those metrics on their own
* added new webhooks - `PeerConnected`, `PeerDisconnected`, `HlsUploaded`, `HlsUploadCrashed`
* added DNS strategy for clustering
* revisited logs - now only Jellyfish logs should be printed
* renamed ComponentMetadata to ComponentProperties in REST API **[BREAKING]** - requests that add components will result in responses containing `properties` field instead of `metadata` field.
* creating component will now always return configuration options this component was creatd with instead of an empty object **[BREAKING]**
* added `JF_SSL_KEY_PATH` and `JF_SSL_CERT_PATH`
* renamed `JF_OUTPUT_BASE_PATH` to `JF_RESOURCES_BASE_PATH` and changed the default from jellyfish_output to jellyfish_resources **[BREAKING]**
* `JF_DIST_NODE_NAME` defaults to hostname from now
* `JF_DIST_MODE` defaults to sname from now **[BREAKING]**
* new versions of [Elixir](https://hexdocs.pm/jellyfish_server_sdk/readme.html) (0.3.0) and [Python](https://jellyfish-dev.github.io/python-server-sdk/v0.2.0/api/jellyfish.html) (0.2.0) Server SDKs 

### Bugfixes:
* fixed `PeerDisconnected` notification - it might have not been fired e.g. when non-empty room was deleted. Now `PeerDisconnected` is guaranteed to be fired every time peer is removed, peer crashes, non-empty room is removed or non-empty room crashes.
* tests fixes and stability improvements
* fixed URL to Jellydashboard
* **prevent from unauthorized access to system files via REST API**
* fixed Prometheus metrics resolution - Prometheus metrics are now updated as soon as an event occurs instead of every X seconds