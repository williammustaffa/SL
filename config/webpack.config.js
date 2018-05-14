const path = require('path');
const getRules = require('./rules');
const getPlugins = require('./plugins');
const jsConfig = require('../jsconfig.json');

const paths = jsConfig.compilerOptions.paths;
const aliases = Object.keys(paths).reduce((prev, key) => {
  prev[key] = path.resolve(__dirname, `../${paths[key][0]}`);
  return prev;
}, {});

const webpackConfig = {
  mode: process.env.NODE_ENV,
  resolve: {
    alias: aliases,
  },
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '../src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, '../../ui'),
    filename: 'js/bundle.[hash:7].js',
  },
  module: {
    rules: getRules(),
  },
  plugins: getPlugins(),
};

// Dev server config
if (process.env.NODE_ENV === 'development') {

  webpackConfig.devServer = {
    port: 3000,
    contentBase: path.resolve(__dirname, '../../ui'),
    stats: { children: false },
    proxy: {
      '/api': {
        target: 'http://54.152.10.51',
        secure: false,
      },
    },
    hot: true,
    disableHostCheck: true,
  };
}

module.exports = webpackConfig;