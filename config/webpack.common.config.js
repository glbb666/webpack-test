const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry:{
    app:'./src/index.js',
    vendor:['react','react-dom']
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        use:'babel-loader',
        exclude: /node_modules/,//不需要去转译"node\_modules"这里面的文件。
      },
      {
        test:/\.(jpg|png)$/,
        use:[{
          loader:'url-loader',
          options:{
            name:'images/[name]-[contenthash].[ext]',
            esModule:false,
            limit:10240//小于10kb得图片打包
          },
        }],
        exclude: /node_modules/
      }
    ]
  },
  // externals: {
  //   "react": {
  //       commonjs: 'React',
  //       commonjs2: 'React',
  //        amd: 'React',
  //          root: 'React'
  //   },
  //   "react-dom": {
  //       commonjs: 'ReactDOM',
  //       commonjs2: 'ReactDOM',
  //        amd: 'ReactDOM',
  //          root: 'ReactDOM'
  //   }
  // },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',//默认值为index.html，你也可以把它放在子目录下，如html/index.html
      template: 'src/index.html',// 定义的html为模板生成 从根路径开始查找
      inject: 'body',
      minify: {// 压缩HTML文件
        removeComments: true,//去除注释
        collapseWhitespace: true,//去除空格
      },
    })
  ]
};
module.exports = config;