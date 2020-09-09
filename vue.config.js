const path = require("path");

module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/assets/style/index.scss";`
      }
    }
  }
};
