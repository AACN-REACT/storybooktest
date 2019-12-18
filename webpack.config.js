const path = require("path");

const htmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    outputPath: "/"
  },
  modules: {
    rules: [
      {
        test: /js$/,
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
