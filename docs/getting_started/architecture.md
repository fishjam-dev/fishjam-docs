import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

# Architecture

Jellyfish ships with a couple of SDKs that make it easier to manage its state, as well as
publish and consume tracks.

There are two types of SDKs: server side and client side.

## Server SDKs

Server SDKs allow you to manage Jellyfish state.
In particular, you can:
* authenticate
* create/delete rooms
* add/remove peers
* add/remove components

Support for server-side notifications is also planned for the near future.

Under the hood, Server SDKs just use [Jellyfish REST API](../api_reference.md). 

:::tip

As an example, you can use server SDK to introduce a time limit on meeting duration and shut down the room after it passes.

:::

## Client SDKs

Client SDKs allow you to connect to Jellyfish to publish and consume tracks.
In particular, you can:
* authenticate
* join specific room
* publish audio and video
* receive audio and video from other peers and components

At the moment, Jellyfish supports only one type of client - WebRTC.

## Diagram

The whole concept is presented in the following diagram.


<ThemedImage
  alt="Jellyfish architecture"
  sources={{
    light: useBaseUrl('/img/architecture-light.png'),
    dark: useBaseUrl('/img/architecture-dark.png'),
  }}
/>

<br/>
<br/>

**Your Backend (BE)** - serves your application frontend, and manages the database and 
application-specific logic.

**Jellyfish (JF)** - Jellyfish media server.
Manages media.

**Admin** - someone who has special permission in your application - can create/delete
rooms, add/remove peers, etc.

**User** - someone who connects to Jellyfish to send and receive media.

Everything starts with *Admin* who sends an HTTP request to *BE* to create a new room.
*BE* uses *jellyfish-server-sdk* to communicate with *JF* and create the room.
Under the hood, *jellyfish-server-sdk* uses REST API exposed by *JF*.
After the room has been created, the *Admin* invites a user by sending a new HTTP request to *BE*.
Again, *BE* uses *jellyfish-server-sdk* to add the new peer to *JF*.

On the user side, they send a request to *BE* to join the room.
*BE* replies with *JF* IP address it should connect to.
Then, the *User* uses *jellyfish-client-sdk* to connect to *JF*.
After the connection has been established, the *User* can send and receive media.