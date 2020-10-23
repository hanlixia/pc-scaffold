"use strict";
const TimeStamp = new Date().getTime();

module.exports = {
  publicPath: "/",
  lintOnSave: true,
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    port: 2000,
    open: false, //设置true为打开默认浏览器
    proxy: {
      '/api/': {
        target: "http://127.0.0.1:8080", // API服务所在IP及端口号
        changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
        pathRewrite: {
          '^/api': '' // 重写路径
        }
      },
    },
    disableHostCheck: true,
  },
  productionSourceMap: false,
  configureWebpack: {
    output: {
      filename: `static/js/[name].${TimeStamp}.js`,
      chunkFilename: `static/js/[name].${TimeStamp}.js`
    }
  }
};
