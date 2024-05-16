import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# HLS

Creates HLS playlist that is ready to be broadcasted via CDN.
Read more about HLS [here](https://developer.apple.com/streaming/).

## Compatibility

* [WebRTC](../peers/webrtc.md)
* [RTSP](./rtsp.md)
* [File](./file.md)
* [SIP](./sip.md)

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
the [Subscription API](../../for_developers/api_reference/rest_api#tag/room/operation/subscribe_to).

<Tabs>
  <TabItem value="elixir" label="Elixir">

```elixir
server_address = "localhost:5002"
server_api_token = "development"

client = Fishjam.Client.new(server_address: server_address, server_api_token: server_api_token)

{:ok, room, _fishjam_address} = Fishjam.Room.create(client, video_codec: :h264)
{:ok, %{peer: peer}} = Fishjam.Room.add_peer(client, room.id, Fishjam.Peer.WebRTC)

hls_options = %Fishjam.Component.HLS{subscribe_mode: :manual}
{:ok, _component} = Fishjam.Room.add_component(client, room.id, hls_options)

:ok = Fishjam.Room.hls_subscribe(client, room.id, [peer.id])
```

  </TabItem>

  <TabItem value="python" label="Python">

```python
from fishjam import RoomApi, ComponentOptionsHLS, PeerOptionsWebRTC

server_address = "localhost:5002"
server_api_token = "development"

room_api = RoomApi(server_address='localhost:5002', server_api_token='development')

fishjam_address, room = room_api.create_room(video_codec='h264')
result = room_api.add_peer(room.id, options=PeerOptionsWebRTC())

hls_options = ComponentOptionsHLS(subscribe_mode="manual")
component_hls = room_api.add_component(room.id, options=hls_options)

room_api.hls_subscribe(room.id, [result.peer.id])
```

  </TabItem>
</Tabs>

## Env variables

* `FJ_COMPONENTS_USED` - has to contain `hls` if HLS components will be used.<br/>
By default set to an empty string (HLS components are disabled).<br/>
Refer [here](../installation.md#environment-variables) for more info.

## Output

After adding a WebRTC peer (and at least one track) or an RTSP component, the HLS stream will be available
under `http://<fishjam-address>/hls/<room_id>/index.m3u8` (or `https://`, if using TLS).

## Example Docker commands

The HLS playlist will be created inside the Docker container. To access it from the host,
you need to create a volume, e.g. by adding the option `-v $(pwd)/fishjam_resources:/app/fishjam_resources`
to your Docker command.

Other than that, your Docker commands shouldn't be affected by adding this component.

```bash
docker run -p 8080:8080/tcp \
           -e FJ_SERVER_API_TOKEN=token \
           -e FJ_HOST=localhost:8080 \
           -v $(pwd)/fishjam_resources:/app/fishjam_resources \
           ghcr.io/fishjam-dev/fishjam:0.3.0
```
