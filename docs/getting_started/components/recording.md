# Recording
This feature saves RTP streams (all streams going through a room) to an S3 bucket, while simultaneously creating a `report.json` file that contains all necessary information to depayload and decode the saved streams.

To utilize the output of the Recording Component:
* The streams are serialized using the  [Membrane Stream Plugin](https://github.com/membraneframework/membrane_stream_plugin). Use the deserializer from this plugin to obtain the plain RTP.
* In order to depayload RTP packets to the codecs, use the RTP depayloader bin from the Membrane RTP Plugin.

For an example pipeline, please refer to the [Recording Converter](https://github.com/fishjam-dev/recording-converter).

## Compatibility

* [WebRTC](../peers/webrtc.md)
* [RTSP](./rtsp.md)
* [SIP](./sip.md)
* [File](./file.md)

## Requirements

* The [Room](../../introduction/basic_concepts\#room) in which the Recording component is created must have the video codec set to H264.
See [API](../../for_developers/api_reference/rest_api#tag/room/operation/create_room) for more information.
* Max 1 Recording component allowed per room.
* Remember to provide credentials and path prefix through only one method. Otherwise recording compontent won't create.

## Configuration options

**Optional**:

* `path_prefix` (String, default: "") - This option defines the path prefix under which all streams will be stored.
* `credentials` (Object, default: null) - Here you can provide your AWS S3 credentials. 
If this is set to null, you will need to provide these credentials via environment variables.
Once uploaded, the stream will be accessible in the `<path-prefix>/<room-id>` directory in the S3 bucket.
Please refer to the [Configuration API](../../for_developers/api_reference/rest_api#tag/room/operation/add_component) for exact structure of the AWS S3 credentials.
* `subscribeMode` (string "manual" or "auto", default: "auto") - whether Recording component should automatically start consuming available tracks.
When set to `manual`, Recording component has to be explicitly told to subscribe to a specific peer/component tracks using 
the [Subscription API](../../for_developers/api_reference/rest_api#tag/room/operation/subscribe_to).

## Environment variables

* `FJ_COMPONENTS_USED` - has to contain `recording` if Recording components will be used.<br/>
By default set to an empty string (Recording components are disabled).<br/>
Refer [here](../installation.md#environment-variables) for more info.

### S3-related

If you prefer not to pass these parameters through the REST API, you should declare the following environment variables for the S3 bucket:

Credentials:
* `FJ_S3_BUCKET` - The name of the S3 bucket where the RTP streams will be stored.
* `FJ_S3_REGION` - The AWS region where your S3 bucket is located.
* `FJ_S3_ACCESS_KEY_ID` - Your AWS access key ID.
* `FJ_S3_SECRET_ACCESS_KEY` - Your secret access key for AWS. 
Path prefix:
* `FJ_S3_PATH_PREFIX` - path prefix under which all streams will be stored.

## Client SDK

The recording component allows for customization of each track. Currently, there are two fields that can be set based on client and track properties:

* `displayName` - The name of the track that will be displayed on the recording.
* `type` - The type of the track. At present, only screensharing is supported; all other types will be ignored.
  
These fields should be provided by the client for each track, utilizing track metadata. For additional information, please refer to the `addTrack` function of specific client SDK e.g.  [ts-client-sdk](https://fishjam-dev.github.io/ts-client-sdk/classes/FishjamClient.html#addTrack).