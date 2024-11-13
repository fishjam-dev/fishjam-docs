> [!IMPORTANT]  
> This repository is archived.
>
> Check out our [new documentation](https://github.com/fishjam-cloud/documentation) for [Fishjam Cloud](https://fishjam.io/).

# Fishjam docs

[![pages-build-deployment](https://github.com/fishjam-dev/fishjam-docs/actions/workflows/build_pages.yml/badge.svg)](https://github.com/fishjam-dev/fishjam-docs/actions/workflows/pages/pages-build-deployment)

The docs for the [Fishjam](https://github.com/fishjam-dev/fishjam).
You can read the docs here: https://fishjam-dev.github.io/fishjam-docs/

## Installation

```
npm install
```

## Local Development

```
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Versioning

We follow [the versioning system provided by docusaurus](https://docusaurus.io/docs/versioning)

To create a new docs version:

- make sure that `sidebars.js` and files inside `docs/` directory are up-to-date and ready to be frozen
- run `npm run docusaurus docs:version 1.0.0`

## Copyright and License

Copyright 2024, [Software Mansion](https://swmansion.com/?utm_source=git&utm_medium=readme&utm_campaign=fishjam)

[![Software Mansion](https://logo.swmansion.com/logo?color=white&variant=desktop&width=200&tag=membrane-github)](https://swmansion.com/?utm_source=git&utm_medium=readme&utm_campaign=fishjam)

Licensed under the [Apache License, Version 2.0](LICENSE)
