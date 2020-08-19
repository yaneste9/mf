const { merge } = require('webpack-merge');
const baseConfig = require('../base.js');

const moduleConfig = merge(baseConfig, {
  module: {},
});

const commonConfig = {
  plugins: [],
};

module.exports = { moduleConfig, commonConfig };
