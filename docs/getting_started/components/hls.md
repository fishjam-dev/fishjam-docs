import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# HLS

Creates HLS playlist that is ready to be broadcasted via CDN.
Read more about HLS [here](https://developer.apple.com/streaming/).

## Compatibility

* [WebRTC](../peers/webrtc.md)
* [RTSP](./rtsp.md)
* [File](./file.md)

## Requirements

* The [Room](../../introduction/basic_concepts\#room) in which the HLS component is created must have the video codec set to H264.
See [API](../../for_developers/api_reference/rest_api#tag/room/operation/create_room) for more information.
* Max 1 HLS component allowed per room.

## Configuration options

**Optional**

* `lowLatency` (boolean, default: false) - whether the component should use LL-HLS
* `persistent` (boolean, default: false) - whether the stream should be saved or not.
After a meeting that integrates an HLS component (with the persistent option set to true) ends, the meeting is preserved as a recording. 
To manage this recording, use the [Recording API](../../for_developers/api_reference/rest_api#tag/recording).
The recording is also available as [HLS Video On Demand (VOD) API](../../for_developers/api_reference/rest_api#tag/recording/operation/getRecordingContent).
* `targetWindowDuration` (positive integer, default: null) - represents the duration, in seconds, of the live streaming content to be
    maintained in a rolling window. If set to null (default), the entire stream will be available.
* `s3` (object, default: null) - AWS S3 credentials. If credentials are set, the stream will be saved to the specified bucket.
This solution will automatically send your streams to an AWS bucket right after the end of your meeting.
The uploaded stream will be accessible in the `/<room-id>` folder within the S3 bucket.
For the exact credential structure see [Configuration API](../../for_developers/api_reference/rest_api#tag/room/operation/add_component).
* `subscribeMode` (string "manual" or "auto", default: "auto") - whether HLS component should automatically start consuming available tracks.
When set to `manual`, HLS component has to be explicitly told to subscribe to a specific peer/component tracks using 
the [Subscription API](../../for_developers/api_reference/rest_api#tag/hls/operation/subscribe_hls_to).

<Tabs>
  <TabItem value="elixir" label="Elixir">

```elixir
server_address = "localhost:5002"
server_api_token = "development"

client = Jellyfish.Client.new(server_address: server_address, server_api_token: server_api_token)

{:ok, room, _jellyfish_address} = Jellyfish.Room.create(client, video_codec: :h264)
{:ok, peer, _peer_token} = Jellyfish.Room.add_peer(client, room.id, Jellyfish.Peer.WebRTC)

hls_options = %Jellyfish.Component.HLS{subscribe_mode: :manual}
{:ok, _component} = Jellyfish.Room.add_component(client, room.id, hls_options)

:ok = Jellyfish.Room.hls_subscribe(client, room.id, [peer.id])
```

  </TabItem>

  <TabItem value="python" label="Python">

```python
TODO
```

  </TabItem>
</Tabs>

## Env variables

Currently, there are no environment variables related to this component.

## Output

After adding a WebRTC peer (and at least one track) or an RTSP component, the HLS stream will be available
under `http://<jellyfish-address>/hls/<room_id>/index.m3u8` (or `https://`, if using TLS).

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
