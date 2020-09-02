const path = require('path');

const config = {
  entry:{
    app:'./src/app.js',
    vendor:['react','react-dom']
  },
  output:{
    filename:'js/[name][contenthash].js',
    //此处的__dirname为/Users/bytedance/Desktop/webpack-test/config
    path: path.resolve(__dirname, '../dist')
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        use:'babel-loader',
        exclude: /node_modules/,//不需要去转译"node\_modules"这里面的文件。
      }
    ]
  }
};
module.exports = config;