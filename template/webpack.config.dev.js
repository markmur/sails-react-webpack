'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    './assets/main.jsx',
  ],

  output: {
    path: path.join(__dirname, '/public/dist/'),
    filename: 'bundle.js',
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

  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      __ENV__: NODE_ENV,
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
        use: 'babel-loader',
        include: path.join(__dirname, 'assets'),
      },
    ],

    noParse: /\.min\.js/,
  },
};
