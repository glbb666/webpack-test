const {merge} = require('webpack-merge');
const common = require('./webpack.common.config');
module.exports = merge(common,{
  mode:'development',
  module:{
    rules:[{
      test:/\.(css|less)/,
      loader:['style-loader','css-loader','less-loader']
    }]
  }
})