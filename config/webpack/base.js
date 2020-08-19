const { resolve } = require('path');

const baseConfig = {
  stats: 'minimal',

  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  },
  watchOptions: {
    ignored: ['../../../dist/**', '../../../node_modules/**', '../../../config/**'],
  },
};

module.exports = baseConfig;
