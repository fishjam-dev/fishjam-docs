# Metrics

Fishjam exports several metrics in the Prometheus format.
By default, they are available on port `9568` at `/metrics`.
See `FJ_METRICS_IP` and `FJ_METRICS_PORT` for configuration options.

| Name                                           | Labels    | Description                                                                   |
| ---------------------------------------------- | --------- | ----------------------------------------------------------------------------- |
| `fishjam_traffic_ingress_webrtc_total_bytes` |           | Total WebRTC traffic received                                                 |
| `fishjam_traffic_egress_webrtc_total_bytes`  |           | Total WebRTC traffic sent                                                     |
| `fishjam_traffic_ingress_http_total_bytes`   |           | Total HTTP traffic received                                                   |
| `fishjam_traffic_egress_http_total_bytes`    |           | Total HTTP traffic sent                                                       |
| `fishjam_rooms`                              |           | Number of rooms currently present in Fishjam                                |
| `fishjam_room_peers`                         | `room_id` | Number of peers currently present in a given room                             |
| `fishjam_room_peer_time_total_seconds`       | `room_id` | Total peer time accumulated for a given room                                  |
| `fishjam_room_duration_seconds`              | `room_id` | Duration of a given room                                                      |
| `fishjam_room_peer_connects_total`           | `room_id` | Number of PeerConnected events emitted during the lifetime of a given room    |
| `fishjam_room_peer_disconnects_total`        | `room_id` | Number of PeerDisconnected events emitted during the lifetime of a given room |
| `fishjam_room_peer_crashes_total`            | `room_id` | Number of PeerCrashed events emitted during the lifetime of a given room      |
| `vm_memory_total_bytes`                        |           | Total memory used by Erlang Virtual Machine                                   |
| `vm_total_run_queue_lengths_total`             |           | Number of Erlang processes waiting to be executed                             |
| `vm_total_run_queue_lengths_cpu`               |           | Number of Erlang processes waiting to be executed on CPU schedulers           |
| `vm_total_run_queue_lengths_io`                |           | Number of Erlang processes waiting to be executed on IO schedulers            |
