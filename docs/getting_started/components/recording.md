# Recording
This feature saves RTP streams (all streams going through a room) to an S3 bucket, while simultaneously creating a `report.json` file that contains all necessary information to depayload and decode the saved streams.

To utilize the output of the Recording Component:
* The streams are serialized using the  [Membrane Stream Plugin](https://github.com/membraneframework/membrane_stream_plugin). Use the deserializer from this plugin to obtain the plain RTP.
* In order to depayload RTP packets to the codecs, use the RTP depayloader bin from the Membrane RTP Plugin.

For an example pipeline, please refer to the [Recording Converter](https://github.com/jellyfish-dev/recording-converter).

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

## Environment variables

If you prefer not to pass these parameters through the REST API, you should declare the following environment variables for the S3 bucket:

Credentials:
* `JF_S3_BUCKET` - The name of the S3 bucket where the RTP streams will be stored.
* `JF_S3_REGION` - The AWS region where your S3 bucket is located.
* `JF_S3_ACCESS_KEY_ID` - Your AWS access key ID.
* `JF_S3_SECRET_ACCESS_KEY` - Your secret access key for AWS. 
Path prefix:
* `JF_S3_PATH_PREFIX` - path prefix under which all streams will be stored.