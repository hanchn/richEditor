const path = require("path");
const fs = require("fs");
const merge = require("webpack-merge");
const base = require("./webpack.base");
const webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(base, {
  watch: true,
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    port: 3001,
    open: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
    new HtmlWebpackPlugin({
      title: "测试页面",
      filename: "index.html",
      template: "./dist/index.html",
      inject: "body",
      showErrors: true,
      chunks: ["common", "index"]
    })
  ]
});
