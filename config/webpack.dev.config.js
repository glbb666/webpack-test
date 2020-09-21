const {merge} = require('webpack-merge');
const path = require('path')
const common = require('./webpack.common.config');
const webpack = require('webpack');
const proxyTable = require('./proxy.config.js');

module.exports = merge(common,{
  mode:'development',
  output: {
    filename: 'js/[name].js',
  },
  devServer:{
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,//浏览器自动打开页面
    inline: true,//每次修改源文件后保存会自动刷新页面
    port: 9000,
    compress: true,//配置是否启用 gzip 压缩
    hot: true,
    proxy: proxyTable
  },
  devtool: 'inline-source-map',
  module:{
    rules:[
      {
        test:/\.(css|less)/,
        loader:['style-loader','css-loader','less-loader']
      }
    ],   
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})