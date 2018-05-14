const webpack = require('webpack');

const hmrPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = hmrPlugin;