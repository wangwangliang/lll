var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
	  loaders: [
	    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react','stage-0',]
        }
	    },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      }
	  ]
	},
  devServer: {
    compress: true,
    port: 9000
  }
};
