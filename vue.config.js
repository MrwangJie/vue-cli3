const path = require('path')
const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/'
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('scr/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false
  // devServe: {
  //   proxy: 'http://localhost:3000'
  // }
}
