const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./index.ts",
  externals: ["aws-sdk"],
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader?cacheDirectory=true" }
      }
    ]
  },
  output: {
    filename: "index.js",
    path: process.cwd(),
    libraryTarget: "commonjs2"
  },
  plugins: [new webpack.IgnorePlugin(/^electron$/)],
  resolve: {
    alias: {
      "scrypt.js": path.resolve(__dirname, "node_modules/scrypt.js/js.js")
    },
    extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx", ".json"]
  },
  target: "node"
};
