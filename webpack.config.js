const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss|\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
        {
          test: /\.(png|svg|jpg|gif|jpeg)$/,
          use: ['file-loader']
        }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html'
    })
  ]
};