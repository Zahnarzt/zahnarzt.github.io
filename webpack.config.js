const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { resolve } = require('path');
const portFinderSync = require('portfinder-sync');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const modeConfig = env => require(`./webpack/webpack.${env.mode}.js`)(env);
const webcomponents = './node_modules/@webcomponents/webcomponentsjs';
const polyfils = [
  {
    from: resolve(`${webcomponents}/webcomponents-loader.js`),
    to: 'vendor',
    flatten: true
  },
  {
    from: resolve(`${webcomponents}/custom-elements-es5-adapter.js`),
    to: 'vendor',
    flatten: true
  }
];

module.exports = ({ mode }) => {
  return webpackMerge({
    mode,
    resolve: {
      extensions: ['.js', '.ts', '.md']
    },
    entry: {
      'app': ['babel-polyfill', './src/app.ts']
    },
    output: {
      publicPath: 'dist/',
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
      chunkFilename: '[id].[hash].js'
    },
    /* devServer: {
      inline: true,
      host: '127.0.0.1',
      port: portFinderSync.getPort(8080),
      compress: true,
      historyApiFallback: true,
      writeToDisk: true
    }, */
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      ie: '11'
                    }
                  }
                ]
              ],
              plugins: ['@babel/plugin-syntax-dynamic-import']
            }
          }
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader'
        },
        {
          test: /\.css|\.s(c|a)ss$/,
          use: [{
            loader: 'lit-scss-loader',
            options: {
              minify: true
            },
          }, 'extract-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.md$/,
          use: [
              {
                  loader: "html-loader"
              },
              {
                  loader: "markdown-loader",
                  options: {
                    baseUrl: '/'
                  }
              }
          ]
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          terserOptions: {
            output: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HTMLWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html'),
        filename: path.join(__dirname, 'index.html'),
        output: path.resolve(__dirname, 'dist'),
        minify: {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true
        }
      }),
      new CopyWebpackPlugin(
        [
          ...polyfils
        ],
        {
          ignore: ['.DS_Store']
        }
      ),
      new webpack.ProgressPlugin()
    ]
  })
}

