const path = require('path');
const webpack = require('webpack');
const config = require('./config/dev');

module.exports = {
  context: path.resolve(__dirname, './app'),
  entry: {
    'main': './H5App.js',
    'preloader': './preloader.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    poll: 1000,
    ignored: /node_modules|styl|css|dist|docs/
  },
  plugins: [
    new webpack.DefinePlugin(config)
  ],
  externals: {
    'jquery': 'jQuery'
  }
};