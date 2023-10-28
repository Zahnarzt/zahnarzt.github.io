const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const webpack = require('webpack');
const webcomponents = './node_modules/@webcomponents/webcomponentsjs';

const polyfills = [
  {
    from: resolve(`${webcomponents}/webcomponents-loader.js`),
    to: 'vendor',
    flatten: true
  },
  {
    from: resolve(`${webcomponents}/bundles/**.*`),
    to: 'vendor/bundles',
    flatten: true
  },
  {
    from: resolve(`${webcomponents}/custom-elements-es5-adapter.js`),
    to: 'vendor',
    flatten: true
  }
];
// Try the environment variable, otherwise use root
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: ['babel-polyfill', './src/app.ts'],
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
  resolve: {
    extensions: ['.js', '.ts', '.md']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: path.join(__dirname, 'index.html'),
      output: path.resolve(__dirname, 'dist'),
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true
      },
      inject:true,
    }),
    new CopyWebpackPlugin(
      [
        ...polyfills
      ],
      {
        ignore: ['.DS_Store']
      }
    ),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    //path: path.resolve(__dirname, 'dist'),
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
