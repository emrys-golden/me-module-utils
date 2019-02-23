#!/usr/bin/env node
/* eslint no-console: 0 */

const { argv } = require('yargs');
const webpack = require('webpack');
const devConfig = require('../src/client/webpack.dev.js');
const prodConfig = require('../src/client/webpack.prod.js');

const mode = argv.mode || 'development';

const config = mode === 'development' ? devConfig : prodConfig;

console.info(`Preparing ${mode} bundle`);

webpack(config, (err, stats) => {
  if (err) {
    console.error(err.stack || err);

    if (err.details) {
      console.error(err.details);
    }

    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    info.errors.forEach(error => console.error(error));
  }

  if (stats.hasWarnings()) {
    info.warnings.forEach(warning => console.warn(warning));
  }
});
