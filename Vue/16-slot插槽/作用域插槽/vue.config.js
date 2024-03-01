const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,//是否需要通过 Babel 转译的依赖模块
  lintOnSave: false,//是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  outputDir:'build' //项目开发完毕，打包输出代码的目录
})
