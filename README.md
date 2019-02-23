# me-module-utils
> .me module utilities

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Install

```
npm install --save-dev @emrys-golden/me-module-utils
```

## Usage

```json
{
  "name": "me-module",
  "version": "1.0.0",
  "description": "Some .me module",
  "main": "src/index.js",
  "scripts": {
    "build": "bundle-client",
    "start": "start-client"
  },
  "devDependencies": {
    "@emrys-golden/me-module-utils": "^1.0.0"
  }
}
```

## API

### `bunde-client`

Bundles a React module using Webpack

### `start-client`

Runs the React module with `webpack-dev-server`

## License

MIT © 2019 Jonathan Golden
