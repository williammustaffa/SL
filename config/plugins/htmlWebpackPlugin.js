const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  inject: false,
  title: 'Project Name',
  template: 'template/index.ejs',
  favicon: 'config/assets/favicon.ico'
});

module.exports = htmlWebpackPlugin;