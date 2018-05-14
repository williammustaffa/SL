const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const cleanWebpackPlugin = new CleanWebpackPlugin(['ui/*'], {
  verbose: true,
  dry: false,
  root: path.resolve(__dirname, '../../../'),
});

module.exports = cleanWebpackPlugin;

