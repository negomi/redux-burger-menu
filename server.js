const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  contentBase: 'docs',
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(3000, 'localhost', (err) => {
  if (err) return console.log(err);
  console.log('Listening at http://localhost:3000/');
});
