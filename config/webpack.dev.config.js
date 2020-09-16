const {merge} = require('webpack-merge');
const path = require('path')
const common = require('./webpack.common.config');
const webpack = require('webpack');


module.exports = merge(common,{
  mode:'development',
  output: {
    filename: 'js/[name].[hash:8].bundle.js',
  },
  devServer:{
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port: 9000,
    compress: true,
    hot: true
  },
  module:{
    rules:[{
      test:/\.(css|less)/,
      loader:['style-loader','css-loader','less-loader']
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})