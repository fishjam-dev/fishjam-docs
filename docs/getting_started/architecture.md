import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

# Architecture

Jellyfish ships with a couple of SDKs that make it easier to manage its state, as well as
publish and consume tracks.

There are two types of SDKs: server side and client side.

## Server SDKs

Server SDKs allow you to manage Jellyfish state.
In particular, you can:
* create/delete rooms
* add/remove peers
* add/remove components

Under the hood, they just use [Jellyfish REST API](rest_api_reference.md). 

## Client SDKs

Client SDKs allow you to connect to Jellyfish to publish and consume tracks.
In particular, you can:
* join specific room
* publish audio and video
* receive audio and video from other peers and components

At the moment, Jellyfish supports only one type of clients - WebRTC.

## Diagram

The whole concept is presented in the following diagram.


<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/img/architecture-light.png'),
    dark: useBaseUrl('/img/architecture-dark.png'),
  }}
/>
