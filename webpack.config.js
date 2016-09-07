const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    './src/index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public'),
    publicPath: '/public'
  },

  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
