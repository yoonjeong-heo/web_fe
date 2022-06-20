const { defineConfig } = require("@vue/cli-service");

const path = require("path");

module.exports = defineConfig({
  runtimeCompiler: true,
  outputDir: path.resolve("build"),
  transpileDependencies: true,
  lintOnSave: false,

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/init.scss";`,
      },
    },
  },

  configureWebpack: {
    output: {
      filename: "[name].[hash].js",
      chunkFilename: "[name].[hash].js",
    },
    resolve: {
      alias: {
        img: path.resolve("./src/assets/images/"),
        svg: path.resolve("./src/assets/images/svg/"),
        dummy: path.resolve("./src/assets/images/dummy/"),
        font: path.resolve("./src/assets/font"),
      },
    },
  },
});
