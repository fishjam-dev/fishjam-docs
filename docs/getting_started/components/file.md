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
* The input file can be either audio or video
* The video must be encoded in raw H264. The framerate can be specified through `framerate` option. 
  If not specified 30 is set as a default.
  You can convert the video using the following ffmpeg command: 
  `ffmpeg -i input_video -filter:v fps=30 -vcodec libx264 output.h264`
* The audio must be monophonic, encoded in OPUS and encapsulated in Ogg container.
  You can convert the audio using the following ffmpeg command:
  `ffmpeg -i input_audio -ac 1 -acodec libopus output.ogg`
* The input files must be located inside `$JF_RESOURCES_BASE_PATH/file_component_sources` path.
  Take a look at `JF_RESOURCES_BASE_PATH` environment variable in the
  [installation guide](../installation.md#environment-variables) for more info

## Configuration options

**Required**

* `filePath` (string) - path for media file, relative to the `$JF_RESOURCES_BASE_PATH/file_component_sources` directory, with either `.ogg` or `.h264` extension

## Env variables

Currently, there are no environment variables related to this component.
