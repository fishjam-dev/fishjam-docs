---
id: what_is_jellyfish
slug: /
---

# What is Jellyfish?

Jellyfish is an open source, general purpose media server that ships with support for multiple media protocols.
It can be thought of as a multimedia bridge meant for creating different types of multimedia systems. 
With Jellyfish you can easily create a real-time video conferencing system, a broadcasting solution or both at the same time into you. 
The unique feature of our media server is the ability to combine different multimedia protocols. 
For example, one can stream video from its CCTV camera via RTSP to the server, convert it to WebRTC and send to its web application. 
In general, there are no limitations. 
See [Example Scenarios](example_scenarios.md) for more information.

Jellyfish comes with:
* built-in authentication
* client and server SDKs
* support for multiple media protocols
* docker images for multiple architectures

## Supported protocols

Jellyfish supports following protocols:
* [WebRTC](https://webrtc.org/) - used for creating real-time video conferencing systems
* [HLS](https://developer.apple.com/streaming/) - allows for implementing broadcasting solutions
* [RTSP](https://www.rfc-editor.org/rfc/rfc2326.html) - very often used for consuming streams from IP cameras
