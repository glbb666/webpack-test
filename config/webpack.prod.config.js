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
    new MiniCssExtractPlugin({
      filename:'css/[name][contenthash].css'
    })
  ],
  optimization:{
    splitChunks:{
      chunks:'all',
      minSize:30000,
      maxSize: 0,
      minChunks: 1,
      cacheGroups: {// 定义了被抽离的模块如何分成组，不然公共代码全打包到一个JS文件里面
        vendors: {// 第三方库抽离
          priority: 1,// 权重 先进行第三方库抽离
          test:  /[\\/]node_modules[\\/]/,// 选从node_modules文件夹下引入的模块，所以所有第三方模块才会被拆分出来 递归的
          name: "vendor",
          enforce: true,
        },
      }
    }
  }
});