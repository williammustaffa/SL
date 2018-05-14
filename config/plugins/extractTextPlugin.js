const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractTextPlugin = new ExtractTextPlugin({
  filename: 'style/[name].[md5:contenthash:hex:7].css',
})

module.exports = extractTextPlugin;