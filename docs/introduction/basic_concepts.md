# Basic Concepts

This section outlines Jellyfish building blocks.
It is highly recommended to read it before going further as terms
introduced here are used in subsequent chapters.

## Room

A room is a container for peers and components.
Its meaning depends on how it is used.

In case of video conferencing system, one Jellyfish room will represent one real
room or channel where multiple people can talk to each other.

In case of broadcasting system, one room will be a container for two components:
one responsible for receiving stream from a streaming host (e.g. via RTMP) and
the other one responsible for converting this stream into HLS playlist ready to be
broadcasted via CDN.


## Component

A component is a server side process that publishes or subscribes to tracks.
Example components are:
* HLS component - subscribes to all other tracks and creates from them HLS playlist
ready to be broadcasted via CDN
* RTSP component - connects to the remote media source (e.g. an IP camera) and 
publishes its media to be consumed by other components or peers

## Peer

A peer is an entity that connects to the server to publish, subscribe or publish and 
subscribe to tracks published by components or other peers. 
Peer process is spawned after peer connects to the server.
At the moment, there is only one type of peer - WebRTC.

## Difference between Component and Peer

The most important difference between a component and a peer is that component
is a purely server side thing.
It starts its work right after adding it to the server.
On the other hand, peer is something that has to **connect** to the server.
Therefore, peers are allowed to open so called signalling channels to the server.
See also [Example Scenarios](./example_scenarios.md).