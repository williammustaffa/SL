module.exports = {
  test: /\.(png|jpg|gif|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[sha512:hash:base64:7].[ext]',
        outputPath: 'images/'
      }
    }
  ]
}