# Release Notes

## 0.3.0 - 09.01.2024

### Features:
* added `persistent` and `targetWindowDuration` options for HLS component
* added VOD HLS (a.k.a HLS recordings) - allows to play out HLS stream recorded with `persistent` set to `true`
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