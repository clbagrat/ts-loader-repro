var path = require("path")
var webpack = require("webpack")

module.exports = {
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'index.js',
    library: 'repro',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        loader: 'ts-loader',
      },
    ]
  },
  plugins: [],
  resolve: {
    extensions: [ ".ts", ".tsx", ".js"]
  },
  optimization: {
    minimize: true
  },
}