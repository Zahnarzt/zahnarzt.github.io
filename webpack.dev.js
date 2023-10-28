const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const portFinderSync = require('portfinder-sync');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    bonjour: true,
    host: '127.0.0.1',
    port: portFinderSync.getPort(8080),
    compress: true,
    historyApiFallback: true,
    client: {
      progress: true,
    },
    devMiddleware: {
      index: true,
      mimeTypes: { phtml: 'text/html' },
      publicPath: '/',
      serverSideRender: true,
      writeToDisk: true,
    },
    static: {
      publicPath: path.join(__dirname, 'dist')
    },
  },
});
