# Metrics

Jellyfish exports several metrics in the Prometheus format.
By default, they are available on port `9568` at `/metrics`.
See `JF_METRICS_IP` and `JF_METRICS_PORT` for configuration options.

| Name                                                    | Labels    | Description                                       |
| ------------------------------------------------------- | --------- | ------------------------------------------------- |
| `jellyfish_traffic_ingress_total_bytes`                 |           | Total traffic received                            |
| `jellyfish_traffic_ingress_throughput_bytes_per_second` |           | Current throughput for received traffic           |
| `jellyfish_traffic_egress_total_bytes`                  |           | Total traffic sent                                |
| `jellyfish_traffic_egress_throughput_bytes_per_second`  |           | Current throughput for sent traffic               |
| `jellyfish_rooms`                                       |           | Amount of rooms currently present in Jellyfish    |
| `jellyfish_room_peers`                                  | `room_id` | Amount of peers currently present in a given room |
| `jellyfish_room_peer_time_total_seconds`                | `room_id` | Total peer time accumulated for a given room      |

The default metrics from Phoenix and Erlang VM are exported as well.
For description of these metrics, refer [here (Phoenix)](https://hexdocs.pm/phoenix/Phoenix.Logger.html)
and [here (VM)](https://hexdocs.pm/telemetry_metrics/Telemetry.Metrics.html#module-vm-metrics).
