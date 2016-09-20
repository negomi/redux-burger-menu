var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000/',
    './docs/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.REACT_SYNTAX_HIGHLIGHTER_LIGHT_BUILD': true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'docs')
    },
    {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    },
    {
      test: /\.svg$/,
      loader: 'svg-inline'
    }]
  }
};
