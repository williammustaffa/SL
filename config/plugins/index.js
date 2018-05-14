const cleanWebpackPlugin = require('./cleanWebpackPlugin');
const extractTextPlugin = require('./extractTextPlugin');
const hmrPlugin = require('./hmrPlugin');
const htmlWebpackPlugin = require('./htmlWebpackPlugin');

module.exports = function () {
  const plugins = [];

  if (process.env.NODE_ENV === 'development') {
    plugins.push(hmrPlugin);
  } else {
    plugins.push(cleanWebpackPlugin);
  }
  
  plugins.push(extractTextPlugin);
  plugins.push(htmlWebpackPlugin);

  return plugins;
};