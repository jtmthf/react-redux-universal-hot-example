var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var path = require('path');
var fs = require('fs');
var strip = require('strip-loader');

var projectRootPath = path.resolve(__dirname, '../');
var buildpath = path.resolve(projectRootPath, './bin/api');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  devtool: 'source-map',
  entry: './api/api.js',
  target: 'node',
  output: {
    path: './bin/api',
    filename: 'api.js'
  },
  externals: nodeModules,
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: [strip.loader('debug'), 'babel']}
    ]
  },
  progress: true,
  plugins: [
    new CleanPlugin([buildpath], { root: projectRootPath }),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  node: {
    __filename: true,
    __dirname: true,
    console: true
  }
};
