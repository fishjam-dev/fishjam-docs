# File

Publishes media stream from a local file.

Supports H264 for video and OPUS for audio files.

## Compatibility

* [WebRTC](../peers/webrtc.md)
* [HLS](./hls.md)
* [RTSP](./rtsp.md)

## Requirements
* If the File component publishes a video, it does so in the H264 standard.
  If File component publishes video and the [Room](../../introduction/basic_concepts\#room)
  in which the File component is created enforces a video codec,
  it must be set to H264.
  See [API](../../for_developers/api_reference/rest_api#tag/room/operation/create_room)
  for more information.
* The input file must be either raw H264 video or OPUS audio encapsulated in an Ogg container.
  You can use the following ffmpeg commands to convert the media: `ffmpeg -i input_audio -acodec libopus output.opus` or `ffmpeg -i input_video -vcodec libx264 output.h264`

## Configuration options

**Required**

* `filePath` (string) - path for media file, with either `.opus` or `.h264` extension

## Env variables

Currently, there are no environment variables related to this component.
