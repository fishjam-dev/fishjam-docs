# What is Fishjam?

Fishjam is an open-source, general-purpose media server that ships with support for multiple media protocols.
It can be thought of as a multimedia bridge meant for creating different types of multimedia systems.
With Fishjam you can easily create a real-time video conferencing system, a broadcasting solution or both at the same time.
The unique feature of our media server is the ability to combine different multimedia protocols.
For example, one can stream video from its CCTV camera via RTSP to the server, convert it to WebRTC and send it to some web application.
In general, there are no limitations.
See [Example Scenarios](example_scenarios.md) for more information.

Fishjam comes with:

* [built-in authentication](../getting_started/authentication.md)
* [client and server SDKs](../getting_started/sdks.md)
* [server-side notifications](../getting_started/notifications.md)
* [support for multiple media protocols](#supported-protocols)
* [built-in clustering](../cluster.md)
* [tutorials](../tutorials/dashboard.mdx)
* [Docker images for multiple architectures](https://github.com/fishjam-dev/fishjam/pkgs/container/fishjam)
* [deployment instructions](../deploying/vps.md)

## Supported protocols

Fishjam supports following protocols:

* [WebRTC](../getting_started/peers/webrtc.md) - used for creating real-time video conferencing systems
* [HLS](../getting_started/components/hls.md) - allows for implementing broadcasting solutions
* [RTSP](../getting_started/components/rtsp.md) - very often used for consuming streams from IP cameras
* [SIP](../getting_started/components/sip.md) - used for making VoIP calls
