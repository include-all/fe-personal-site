// vue.config.js
const apiMap = {
  prod: 'http://146.56.206.132:3000/',
  local: 'http://127.0.0.1:3080/'
}
module.exports = {
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = "个人站点"
        return args
      })
  },
  devServer: {
    proxy: {
      '/api': {
        target: apiMap.local,
        ws: true,
        changeOrigin: true
      },
    }
  }
}
