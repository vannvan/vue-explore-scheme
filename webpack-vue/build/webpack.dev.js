/*
* @Author: vannvan <https://github.com/vannvan>
* @Date:   2019-12-27 11:26:02
* @Last Modified by:   vannvan
* @Last Modified time: 2019-12-27 11:26:09
*/
const Webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
module.exports = WebpackMerge(webpackConfig,{
  mode:'development',
  devtool:'cheap-module-eval-source-map',
  devServer:{
    port:3000,
    hot:true,
    contentBase:'../dist'
  },
  plugins:[
    new Webpack.HotModuleReplacementPlugin()
  ]
})
