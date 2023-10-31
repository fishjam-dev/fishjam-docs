# HLS

Creates HLS playlist that is ready to be broadcasted via CDN.
Read more about HLS [here](https://developer.apple.com/streaming/).

## Compatibility

* [WebRTC](../peers/webrtc.md)
* [RTSP](../components/rtsp.md)

## Requirements

* The [Room](../../introduction/basic_concepts\#room) in which the HLS component is created must have the video codec set to H264.
See [API](../../for_developers/api_reference/rest_api#tag/room/operation/create_room) for more information.
* Max 1 HLS component allowed per room.

## Configuration options

**Optional**

* `lowLatency` (boolean, default: false) - whether the component should use LL-HLS
* `persistent` (boolean, default: false) - whether the stream should be saved or not
* `targetWindowDuration` (positive integer, default: null) - represents the duration, in seconds, of the live streaming content to be
    maintained in a rolling window. If set to null (default), the entire stream will be available.
## Env variables

Currently, there are no environment variables related to this component.

## Output

After adding a WebRTC peer (and at least one track) or an RTSP component, the HLS stream will be available
under `http://<jellyfish-address>/hls/<room_id>/index.m3u8` (or `https://`, if using TLS).

## Recordings

After a meeting that integrates an HLS component (with the persistent option set to true) ends, the meeting is preserved as a recording. 
To manage this recording, use the [Recording API](../../for_developers/api_reference/rest_api#tag/recording).
The recording is also available as HLS Video On Demand (VOD) [API](../../for_developers/api_reference/rest_api#tag/recording/operation/getRecordingContent).

## Example Docker commands

The HLS playlist will be created inside the Docker container. To access it from the host,
you need to create a volume, e.g. by adding the option `-v $(pwd)/jellyfish_output:/app/jellyfish_output`
to your Docker command.

Other than that, your Docker commands shouldn't be affected by adding this component.

```bash
docker run -p 8080:8080/tcp \
           -e JF_SERVER_API_TOKEN=token \
           -e JF_HOST=localhost:8080 \
           -v $(pwd)/jellyfish_output:/app/jellyfish_output \
           ghcr.io/jellyfish-dev/jellyfish:0.2.0
```
