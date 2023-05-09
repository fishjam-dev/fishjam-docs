# HLS

Creates HLS playlist that is ready to be broadcasted via CDN

## Compatibility

* [WebRTC](../peers/webrtc.md)
* [RTSP](../components/rtsp.md)

## Env variables

Currently, there are no environment variables related to this component.

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
