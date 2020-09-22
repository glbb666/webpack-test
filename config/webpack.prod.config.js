const {merge} = require('webpack-merge');
const common = require('./webpack.common.config.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//css压缩
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');// 可配置删除console.log




module.exports = merge(common,{
  mode:'production',
  output:{
    // 主bundle
    filename:'js/[name][contenthash].js',
    chunkFilename:'js/[name][contenthash].js',
    //此处的__dirname为/Users/bytedance/Desktop/webpack-test/config
    path: path.resolve(__dirname, '../dist'),
    // publicPath + chunkFilename 为打包后生成的html文件请求 chunkFile 的路径
    // publicPath + 图片的URL 为打包后生成的html文件请求图片的路径，其他静态资源文件同理
    //publicPath: ''
  },
  module: {
    rules:[
      {
        test: /\.(less|css)$/,
        use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
      }
    ]
  },
  plugins: [
    new OptimizeCss(),//压缩css代码
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
      automaticNameDelimiter:'~',
      cacheGroups: {// 定义了被抽离的模块如何分成组，不然公共代码全打包到一个JS文件里面
        common: {
          priority:0,
        },
        vendors: {// 第三方库抽离
          priority: -10,// 权重 先进行第三方库抽离
          test:  /[\\/]node_modules[\\/]/,// 选从node_modules文件夹下引入的模块，所以所有第三方模块才会被拆分出来 递归的
          enforce: true,
        },
      }
    },
    minimizer:[
  		new TerserPlugin({// 缩减代码的插件
            terserOptions: {
              compress: {
                drop_console: true, // 删除console.log
              },
            }
        }),
    ]
  }
});