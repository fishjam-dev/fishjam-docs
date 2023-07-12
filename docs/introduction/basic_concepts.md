# Basic Concepts

This section outlines Jellyfish building blocks. We suggest reading this before
you proceed, as these terms will be recurrent in the following chapters. Enjoy
your exploration!

## Room

In Jellyfish, a room serves as a holder for peers and components, its function
varying based on application.

For instance, within a video conferencing system, a Jellyfish room represents a
single online meeting or a channel accommodating multiple users for
conversation.

On the other hand, in a broadcasting system setting, one room will be a
container for two components - one responsible for receiving stream from a
streaming host (e.g. via RTMP) and the other one responsible for converting this
stream into an HLS playlist ready to be broadcasted via CDN.

## Component

A component is a server-side process that publishes or subscribes to tracks.
Example components are:
* HLS component - subscribes to all other tracks and creates from them an HLS
  playlist ready to be broadcasted via CDN
* RTSP component - connects to the remote media source (e.g. an IP camera) and
  publishes its media to be consumed by other components or peers

## Peer

A peer is a client-side entity that connects to the server to publish, subscribe
or publish and subscribe to tracks published by components or other peers. The
peer's process is spawned after the peer connects to the server. At the moment,
there is only one type of peer - WebRTC.

## Difference between Component and Peer

The most important difference between a component and a peer is that component
is a purely server-side thing. It starts its work right after adding it to the
server. On the other hand, a peer is something that has to **connect** to the
server. Therefore, peers are allowed to open so-called signaling channels to the
server. See also [Example Scenarios](./example_scenarios.md).