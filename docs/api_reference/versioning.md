# Api Versioning

In order to ensure Jellyfish backward compatibility with older SDKs,
we introduce versioning to OpenAPI REST specification
and protbuf WebSocket specification.

We want to introduce new changes to the Jellyfish and those changes have to be
reflected in the SDKs.
The changes are in the OpenAPI and protobuf.
There are a couple ideas on how to solve this problem:

## Current approach
In the current workflow we version Jellyfish together with OpenAPI and protobuf.
The same version number is applied to SDKs and we enforce using the same Jellyfish and SDK versions.

Pros:
* easy to introduce changes (no backward compatibility required)
* easy to test - only test with the current version

Cons: 
* no backward compatibility


## Proposed Approach
Introduce breaking changes gradually.

Example:
Let's say that we introduce backward-compatible changes between Jellyfish
`0.2.0` versions and `0.4.0` versions. In the process we marked
some fields as `deprecated` and remove them in Jellyfish `0.5.0`, while
preserving compatibility with JF `0.3.0` and `0.4.0`.
Similarily, in the version `0.6.0` we will likely break compatibility with `0.3.0` but remain compatible with `0.4.0` and `0.5.0`.


In this scenario we need to decide how to version the API.
The best way would be to keep it the same as Jellyfish, since most of the times any change in Jellyfish causes changes either in REST api or WebSocket api.

The downside is that a change in REST api triggers version change
in WebSocket api and vice versa. This is a disadvantage if someone uses 
solely either REST api or WebSocket api - they would have to update version 
even if there was no change in the API they were using.

Pros:
* backward-compatibility is provided to some point, e.g. up to two or three Jellyfish versions

Cons:
* more complicated testing - we have to test thoroughly each version combination we pledge viable
* we need to provide the compatibility information to the users, semantic versioning isn't sufficient

## Variations

Instead of introducing breaking changes with every release, we could
decide to introduce breaking changes in bulk, e.g.

JF `0.2.0` -> `0.6.0` - all backward compatible
in JF `0.7.0` - introduce all changes previously marked as deprecated,
making `0.7.0` incompatible even with `0.6.0`
