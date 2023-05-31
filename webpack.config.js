const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {loader: 'style-loader'},
          { loader: 'css-loader' , options: { modules: false } },
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|pdf)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "index.html"),
    }),
  ],
}