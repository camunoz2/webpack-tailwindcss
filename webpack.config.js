/**
 * @type {import('webpack').Configuration}
 */
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode:"development",
  entry: "./src/scripts/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject:'body',
      template:'./src/index.html'
    }),
  ],
  devServer: {
    watchFiles: ["./src/*"],
    port: 3000,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  }
}
