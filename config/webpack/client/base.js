const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const baseConfig = require('../base.js');

const moduleConfig = merge(baseConfig, {
  module: {},
});

const commonConfig = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'appTwo',
      remotes: {
        appOne: 'appOne@http://localhost:3001/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};

module.exports = { moduleConfig, commonConfig };
