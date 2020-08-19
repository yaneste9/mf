const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const { moduleConfig, commonConfig } = require('./base.js');

const serverConfig = merge(commonConfig, moduleConfig, {
  devtool: 'source-map',
  target: 'node',
  mode: 'development',
  watch: true,

  entry: [path.resolve(__dirname, '../../../src/server/index.ts')],
  externals: [nodeExternals({})],
  output: {
    path: path.resolve(__dirname, '../../../dist'),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
});

module.exports = [serverConfig];
