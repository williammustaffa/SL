const extractTextPlugin = require('../plugins/extractTextPlugin');

module.exports = {
  test: /\.css$/,
  use: extractTextPlugin.extract({
    use: [
      {
        loader: 'css-loader',
        options: {
          minimize: process.env.NODE_ENV === 'production'
        }
      },
    ],
    fallback: 'style-loader'
  })
};