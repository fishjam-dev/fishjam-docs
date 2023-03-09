[![pages-build-deployment](https://github.com/jellyfish-dev/jellyfish-docs/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/jellyfish-dev/jellyfish-docs/actions/workflows/pages/pages-build-deployment)

# Jellyfish docs

The docs for the [Jellyfish](https://github.com/jellyfish-dev/jellyfish).
You can read the docs here: https://jellyfish-dev.github.io/jellyfish-docs/

### Installation

```
npm install
```

### Local Development

```
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Copyright and License

Copyright 2023, [Software Mansion](https://swmansion.com/?utm_source=git&utm_medium=readme&utm_campaign=jellyfish)

[![Software Mansion](https://logo.swmansion.com/logo?color=white&variant=desktop&width=200&tag=membrane-github)](https://swmansion.com/?utm_source=git&utm_medium=readme&utm_campaign=jellyfish)

Licensed under the [Apache License, Version 2.0](LICENSE)
