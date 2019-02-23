const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const getPackageDetails = require('../getPackageDetails');

const { name, version, packageRoot } = getPackageDetails();

module.exports = {
  entry: path.resolve(packageRoot, 'index.dev.js'),
  output: {
    path: path.resolve(packageRoot, 'build'),
    filename: `${name}-${version}-client.js`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: name,
      template: path.join(__dirname, 'index.ejs'),
    }),
  ],
};
