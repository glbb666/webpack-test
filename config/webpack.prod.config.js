const {merge} = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log(merge,common)
module.exports = merge(common,{
  mode:'production',
  module: {
    rules:[
      {
        test: /\.(less|css)$/,
        use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',//默认值为index.html，你也可以把它放在子目录下，如html/index.html
      template: 'src/index.html',// 定义的html为模板生成 从根路径开始查找
      inject: 'body',
      minify: {// 压缩HTML文件
        removeComments: true,//去除注释
        collapseWhitespace: true,//去除空格
      },
    }),
    new MiniCssExtractPlugin({
      filename:'css/[name][contenthash].css'
    })
  ]
});