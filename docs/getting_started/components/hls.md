# HLS

Creates HLS playlist that is ready to be broadcasted via CDN.

## Compatibility

* [WebRTC](../peers/webrtc.md)
* [RTSP](../components/rtsp.md)

## Requirements

* The [Room](../../introduction/basic_concepts\#room) in which the HLS component is created must have the video codec set to H264.
  See [API](../../api_reference/rest_api#tag/room/operation/create_room) for more information.
* Max 1 HLS component allowed per room.

## Configuration options

See [API](../../api_reference/rest_api#tag/room/operation/add_component) for more information.

### Optional

* `lowLatency` (boolean, default: false) - Whether the component should use LL-HLS

## Env variables

Currently, there are no environment variables related to this component.

## Output

After adding a peer (and at least one track) or an RTSP component, the HLS stream will be available
under `http://<jellyfish-address>/hls/<room_id>/index.m3u8` (or `https://`, if using TLS).

## Example Docker commands

The HLS playlist will be created inside the Docker container. To access it from the host,
you need to create a volume, e.g. by adding the option `-v $(pwd)/jellyfish_output:/app/jellyfish_output`
to your Docker command.

Other than that, your Docker commands shouldn't be affected by adding this component.

```bash
docker run -p 4000:4000/tcp \
           -e SERVER_API_TOKEN=token \
           -e VIRTUAL_HOST=localhost \
           -e SECRET_KEY_BASE=secret \
           -v $(pwd)/jellyfish_output:/app/jellyfish_output
           ghcr.io/jellyfish-dev/jellyfish:latest
```
