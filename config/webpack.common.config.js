const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry:{
    app:'./src/index.js',
    vendor:['react','react-dom']
  },
  output:{
    // 主bundle
    filename:'js/[name][contenthash].js',
    chunkFilename:'js/[name][contenthash].js',
    //此处的__dirname为/Users/bytedance/Desktop/webpack-test/config
    path: path.resolve(__dirname, '../dist'),
    // publicPath: "/assets/", // string    // 输出解析文件的目录，url 相对于 HTML 页面
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
          loader:'file-loader',
          options:{
            name:'images/[name]-[contenthash].[ext]',
            // limit:8
          }
        }]
      }
    ]
  },
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