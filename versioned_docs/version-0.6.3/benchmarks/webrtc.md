# WebRTC

The WebRTC tests conducted for the Fishjam media server aimed to assess its performance and reliability in handling real-time communication scenarios, replicating real-life online meetings. 

## Setup

The benchmarks use an 8-core Intel Xeon Processor (Skylake, IBRS).

The peers publish audio tracks and simulcast video tracks,
publishing three video encodings of 150, 500 and 1500 Kbps
and receiving the highest one.

The load is generated from a AMD EPYC 7502P 32-core machine,
with a 1 Gbps bandwidth connection.

## Benchmark results

We performed tests with different configuration - multiple rooms of size two, 
one big room and an intermediate option.

The values for CPU and Network usage are averaged over time, however they
remained stable for the duration of the benchmark.

| Rooms | Peers Per Room | CPU Usage | Incoming throughput | Outgoing throughput |
| ----- | -------------- | --------- | ------------------- | ------------------- |
| 15    | 2              | 92%       | 70 Mbps             | 49 Mbps             |
| 3     | 5              | 91%       | 35 Mbps             | 98 Mbps             |
| 1     | 9              | 91%       | 21 Mbps             | 118 Mbps            |

We also tested a scenario in which there are only two active participants, streaming their video
and audio, while the rest are passive viewers.

| Rooms | Peers Per Room | CPU Usage | Incoming throughput | Outgoing throughput |
| ----- | -------------- | --------- | ------------------- | ------------------- |
| 1     | 40             | 90%       | 5 Mbps              | 129 Mbps            |