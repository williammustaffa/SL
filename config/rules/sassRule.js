const extractTextPlugin = require('../plugins/extractTextPlugin');

module.exports = {
  test: /\.scss$/,
  exclude: /node_modules/,
  use: extractTextPlugin.extract(
    {
      use: [
        {
          loader: 'css-loader',
          options: {
            minimize: process.env.NODE_ENV === 'production'
          }
        },
        { loader: 'sass-loader' }
      ],
      fallback: 'style-loader'
    }
  )
};