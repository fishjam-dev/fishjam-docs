# Metrics Design

Currently, jellyfish exposed a few metrics, which included a label room_id.
Some could be worried about the cardinality of this type of metric.
To answer these worries, we have to deepen our knowledge about Prometheus metrics.
Each unique labelset creates a separate time series.
Each additional time series has RAM, CPU, disk, and network costs.
This cost is usually negligible, but when we talk about hundreds of servers and metrics, it can add up quickly.
But the question is, how quickly will this add up? 

At the moment (16.11.2023), Prometheus can handle around ten million time series.
Prometheus maintainers suggest that when analyzing the capacity of Prometheus, we should think about a cluster where one Prometheus instance monitors around 1000 servers.
Default retention in Prometheus is 15 days, meaning time series older than 15 days are removed.
Based on this assumption, we can approximate how many rooms per hour on each of 1000 jellyfish for 15 days straight must be created to reach Prometheus limits.

```
room_per_hour_on_jellyfish =
= total_time_series_limit / number_of_jellyfishes / prometheus_retention_in_days / hours_in_day = 
= 10_000_000 / 1_000 / 15 / 24 = 27
``` 

This limit is pretty high and, in most use cases, shouldn't be a problem. 
But to be cautious, we will add this label only to metrics where that is required, and we will try to minimize the amount of metrics where that is used.

If this label is a problem for you, there are a few solutions:
- We are thinking about adding a possibility to configurable disable metrics that use the label `room_id`, but it is not in our current roadmap
- You can define in Prometheus that at the scrape time, some labels will be dropped from metrics. (Remember that label dropping should be done cautiously as it could lead to the dropping of some data or aggregation).
- Similarly to previous in Prometheus, at the scrape time, you can define to drop some specific metric.

To get more information about relabeling, metrics or label dropping we suggest to read [grafana tutorial](https://grafana.com/docs/grafana-cloud/cost-management-and-billing/reduce-costs/metrics-costs/client-side-filtering/).


#### Additional Resources:

- https://prometheus.io/docs/practices/instrumentation/#use-labels
- https://stackoverflow.com/a/69167162
- https://newrelic.com/blog/how-to-relic/manage-prometheus-cardinality
- https://grafana.com/blog/2022/10/20/how-to-manage-high-cardinality-metrics-in-prometheus-and-kubernetes/
- https://grafana.com/blog/2022/03/21/how-relabeling-in-prometheus-works/