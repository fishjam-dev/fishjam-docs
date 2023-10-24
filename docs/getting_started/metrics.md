# Metrics

Jellyfish exports several metrics in the Prometheus format.
By default, they are available on port `9568` at `/metrics`.
See `JF_METRICS_IP` and `JF_METRICS_PORT` for configuration options.

| Name                                                           | Labels    | Description                                                         |
| -------------------------------------------------------------- | --------- | ------------------------------------------------------------------- |
| `jellyfish_traffic_ingress_webrtc_total_bytes`                 |           | Total WebRTC traffic received                                       |
| `jellyfish_traffic_ingress_webrtc_throughput_bytes_per_second` |           | Current throughput for received WebRTC traffic                      |
| `jellyfish_traffic_egress_webrtc_total_bytes`                  |           | Total WebRTC traffic sent                                           |
| `jellyfish_traffic_egress_webrtc_throughput_bytes_per_second`  |           | Current throughput for sent WebRTC traffic                          |
| `jellyfish_traffic_ingress_http_total_bytes`                   |           | Total HTTP traffic received                                         |
| `jellyfish_traffic_ingress_http_throughput_bytes_per_second`   |           | Current throughput for received HTTP traffic                        |
| `jellyfish_traffic_egress_http_total_bytes`                    |           | Total HTTP traffic sent                                             |
| `jellyfish_traffic_egress_http_throughput_bytes_per_second`    |           | Current throughput for sent HTTP traffic                            |
| `jellyfish_traffic_ingress_total_bytes`                        |           | Total traffic received                                              |
| `jellyfish_traffic_ingress_throughput_bytes_per_second`        |           | Current throughput for received traffic                             |
| `jellyfish_traffic_egress_total_bytes`                         |           | Total traffic sent                                                  |
| `jellyfish_traffic_egress_throughput_bytes_per_second`         |           | Current throughput for sent traffic                                 |
| `jellyfish_rooms`                                              |           | Amount of rooms currently present in Jellyfish                      |
| `jellyfish_room_peers`                                         | `room_id` | Amount of peers currently present in a given room                   |
| `jellyfish_room_peer_time_total_seconds`                       | `room_id` | Total peer time accumulated for a given room                        |
| `vm_memory_total_bytes`                                        |           | Total memory used by Erlang Virtual Machine                         |
| `vm_total_run_queue_lengths_total`                             |           | Number of Erlang processes waiting to be executed                   |
| `vm_total_run_queue_lengths_cpu`                               |           | Number of Erlang processes waiting to be executed on CPU schedulers |
| `vm_total_run_queue_lengths_io`                                |           | Number of Erlang processes waiting to be executed on IO schedulers  |
