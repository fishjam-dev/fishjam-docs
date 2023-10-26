# Benchmarks

Performance tests for our Jellyfish media server were carried out with particular emphasis
on quantifying its real-world capabilities, even under intense workloads.

## HLS

The conducted stress tests were geared towards assessing performance of both regular HLS
and Low-Latency HLS under substantial load.

We assumed a livestream scenario, where all of the clients demanded the most recent segments or partial segments
as they were produced. This model closely simulates real-time broadcasting situations where all participants
are consuming the same (latest) content concurrently. It could be contrasted e.g. with a video-on-demand (VOD)
scenario, where any client can request any segment at any given time.

### Setup

- Machine `A`, running Jellyfish with one room
  - One WebRTC peer in the room (WebRTC video stream with **constant bitrate of 1.8 Mbps**)
  - One HLS component in the room (segment length: 6 s, partial segment length: 1 s)

- Machine `B`, running a stress test utility
  - The utility steadily increases the number of simulated clients over the course of the test, up to a given amount
  - Clients simulate an HLS player continuously requesting the most recent segments/partials
  (as if watching a livestream)
  - Each client opens a separate connection to Jellyfish on machine `A` (no connection pooling)

#### Machine specs

- CPU: AMD EPYC 7502P (32 cores, 64 threads at 2.5 GHz)
- Memory: 128 GB
- Network bandwidth (`A <---> B`): 10 Gbps

### Test results

We varied the number of client connections and recorded server metrics at each level
to determine how it would perform under increasing load. Values for mean incoming throughput,
mean and peak outgoing throughput, peak memory used, peak CPU utilisation and mean request latency
(grouped by request type) were all recorded.

Before any clients were connected to the server, the memory usage stood at 130 MB
and CPU utilisation was noted at 11%. These values serve as the base or idle state of the server
for comparison against the usage under stress testing.

:::info

It's important to remember that, in the context of HLS, the outgoing throughput is greatly influenced by the bitrate
of the generated segments, which is directly connected to the bitrate of the streams used for segment generation.
Specifically, for video streams featuring high and fluctuating bitrates (such as sports events and video game
live streams) you may typically observe amplified mean and peak outgoing throughputs.

:::

:::caution Caveat

Values *italicised* in the Latency columns indicate instances where network bandwidth limits were reached,
resulting in throttling; in such cases, the observed latency **does not** reflect the server's
innate processing capabilities.

:::

#### Regular HLS

| Client connections | Incoming throughput (mean) | Outgoing throughput (mean) | Outgoing throughput (peak) | Memory used (peak) | CPU utilisation (peak) | Playlist request latency (mean) | Segment request latency (mean) |
| ------- | -------- | --------------- | ---------------- | -------- | ----- | ------ | ------ |
| 500     | 6 Mbps   | 0.9 Gbps        | 1.3 Gbps         | 0.9 GB   | 18%   | 4 ms   | 66 ms  |
| 1000    | 12 Mbps  | 1.9 Gbps        | 2.6 Gbps         | 1.9 GB   | 19%   | 3 ms   | 65 ms  |
| 2000    | 24 Mbps  | 3.6 Gbps        | 5.2 Gbps         | 2.8 GB   | 23%   | 3 ms   | 66 ms  |
| 3000    | 36 Mbps  | 5.1 Gbps        | 6.5 Gbps         | 4.5 GB   | 30%   | 4 ms   | 67 ms  |
| 4000    | 48 Mbps  | 7.0 Gbps        | 9.2 Gbps *(limit)* | 9.2 GB   | 34%   | <i>17 ms*</i>  | <i>243 ms*</i> |

#### Low-Latency HLS

In Low-Latency HLS, the server intentionally delays the response to playlist requests
until the specifically requested partial segment becomes available.
This makes the "Playlist request latency (mean)" metric meaningless, and it is thus omitted from the following table.

| Client connections | Incoming throughput (mean) | Outgoing throughput (mean) | Outgoing throughput (peak) | Memory used (peak) | CPU utilisation (peak) | Partial segment request latency (mean) |
| ------- | -------- | --------------- | ---------------- | -------- | ----- | ------ |
| 500     | 25 Mbps  | 1.1 Gbps        | 4.7 Gbps         | 210 MB   | 25%   | 98 ms  |
| 1000    | 50 Mbps  | 2.3 Gbps        | 9.0 Gbps         | 290 MB   | 34%   | 138 ms |
| 1500    | 75 Mbps  | 3.3 Gbps        | 9.2 Gbps *(limit)* | 340 MB   | 43%   | <i>244 ms*</i> |
| 2000    | 100 Mbps | 4.5 Gbps        | 9.2 Gbps *(limit)* | 410 MB   | 47%   | <i>341 ms*</i> |
| 2500    | 125 Mbps | 5.7 Gbps        | 9.2 Gbps *(limit)* | 480 MB   | 48%   | <i>402 ms*</i> |
| 3000    | 150 Mbps | 6.6 Gbps        | 9.2 Gbps *(limit)* | 560 MB   | 50%   | <i>514 ms*</i> |
