import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

# Example Scenarios

Below, we present example scenarios that can be achieved with Jellyfish.
Each scenario consists of a short description and illustrative Jellyfish 
internal architecture so that you can catch the difference between peers
and components even better!

## Real-time video conferencing system

In this scenario, we want to create a simple video conferencing system
where people can talk to each other in the real-time.

Because of interactive and real-time requirements, the natural choice is
to use the WebRTC standard.

The final architecture would look like this:

<ThemedImage
  alt="Real-time video conferencing system architecture"
  sources={{
    light: useBaseUrl('/img/video-conferencing-light.png'),
    dark: useBaseUrl('/img/video-conferencing-dark.png'),
  }}
/>

## Broadcasting system with the real-time mixin

In this scenario, we want to create a broadcasting solution where
the conversation between multiple people is broadcasted to the broader
audience.

Here, we choose WebRTC as a standard used for connecting people talking 
to each other in real-time and HLS for creating a playlist that can be
then uploaded to CDN and broadcasted to the broader audience.

As you can see, the whole system will automatically
adapt to the number of participants talking in real-time.
In particular, Jellyfish will handle a scenario with only one streamer out of the box.

<ThemedImage
  alt="Broadcasting system architecture"
  sources={{
    light: useBaseUrl('/img/broadcasting-real-time-mixin-light.png'),
    dark: useBaseUrl('/img/broadcasting-real-time-mixin-dark.png'),
  }}
/>

## Displaying IP camera streams in a web browser

In this scenario, we have a set of IP cameras and we want to display
their streams in a web browser.
IP cameras very often use RTSP for streaming media but browsers
don't ship with support for this protocol.
Therefore, to display audio and video in a web browser, we have to use either WebRTC or HLS.
Because, in this scenario, the delay is not the most crucial thing, we choose HLS.

The most important thing here is that the RTSP component connects to the IP camera
and then the camera starts streaming.
It's not the camera that initializes the connection to the server.
Therefore, the RTSP component is a purely server-side thing - once you add it,
it should be able to work on its own.

<ThemedImage
  alt="Multiple IP cameras system architecture"
  sources={{
    light: useBaseUrl('/img/ip-cameras-light.png'),
    dark: useBaseUrl('/img/ip-cameras-dark.png'),
  }}
/>
