#!/usr/bin/env node
/* eslint no-console: 0 */

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('../src/client/webpack.dev.js');

const port = process.env.CLIENT_PORT || 3000;

const compiler = webpack(config);

const options = {};

const server = new WebpackDevServer(compiler, options);

server.listen(port, 'localhost', (...args) => {
  console.log('args', args);
});
