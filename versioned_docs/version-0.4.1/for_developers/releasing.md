# Releasing Jellyfish

To release Jellyfish Media Server perform the following steps:
1. Prepare release candidate and deploy Jellyroom using the newest Jellyfish version.
1. Ensure that Jellydashboard works with the newest Jellyfish.
1. Prepare release notes. Split features from bugfixes and mark breaking changes accordingly.
1. Create and push a new tag on GitHub.
1. Create a new release on GitHub with previously prepared release notes. Don't use auto-generated release notes.
1. Release new versions of server SDKs.
1. Optionally, release new versions of client SDKs.
1. Release new version of documentation. Include new release notes, bump docker image version in examples and add new OpenApi specification document
1. Announce release (Elixir Forum, Discord, Twitter, etc.).
