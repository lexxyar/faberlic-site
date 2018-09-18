var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractCss = new ExtractTextPlugin({
  filename: "../css/app.css"
});

var extractWebpage = new ExtractTextPlugin({
  filename: "../default.html"
});

module.exports = {
  entry: {
    main: "./src/typescript/app.ts"
  },
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "app.js",
    publicPath: "dist/"
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: extractCss.extract({
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.html$/,
        use: extractWebpage.extract({
          use: [
            {
              loader: "file-loader",
              options: {
                name: "../[name].[ext]"
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [extractCss, extractWebpage]
};
