const path = require('path');
const { merge } = require('webpack-merge');
const { moduleConfig, commonConfig } = require('./base.js');

const clientConfig = merge(moduleConfig, commonConfig, {
  devtool: 'source-map',
  target: 'web',
  mode: 'development',
  watch: true,
  entry: [path.resolve(__dirname, '../../../src/client/index.tsx')],

  output: {
    path: path.resolve(__dirname, '../../../dist/public'),
    publicPath: 'http://localhost:3002/',
    filename: 'client.js',
  },
});

module.exports = [clientConfig];
