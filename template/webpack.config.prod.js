'use strict';

const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;
const SaveAssetsJson = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // devtool: '#source-map',

  // Capture timing information for each module
  profile: false,

  // Switch loaders to debug mode
  mode: NODE_ENV,

  // Report the first error as a hard error instead of tolerating it
  bail: true,

  entry: [
    'babel-polyfill',
    './assets/main.jsx',
  ],

  output: {
    path: path.join(__dirname, '/public/dist/'),
    pathinfo: true,
    publicPath: '/dist/',
    filename: 'bundle.[hash].min.js',
  },

  resolve: {
    modules: [__dirname, 'node_modules'],
        alias:{
        assets: 'assets',
        styles:'assets/styles',
        components: 'assets/components/'
    },
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx']
  },

  resolveLoader: {
    modules: [ 'node_modules' ],
  },

  plugins: [
    new CleanWebpackPlugin(['public/dist'], {
      verbose: true,
      dry: false,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new UglifyJsPlugin,
    new SaveAssetsJson({
      path: process.cwd(),
      filename: 'assets.json',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/, // sass files
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
      {
        test: /\.(ttf|eot|svg|woff)(\?[a-z0-9]+)?$/, // fonts files
        loaders: ['file-loader?name=[path][name].[ext]'],
      },
      {
        test: /\.jsx?$/, // react files
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react'],
        include: path.join(__dirname, 'assets'),
      },
    ],

    noParse: /\.min\.js/,
  },
};
