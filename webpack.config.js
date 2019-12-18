const path = require("path");

const htmlPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
  entry: "./src/",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins: [
    new htmlPlugin({
      template: "./src/public/index.html"
    })
  ]
};
