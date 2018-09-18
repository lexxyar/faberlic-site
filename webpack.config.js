var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

var extractCss = new ExtractTextPlugin({
  filename: "../css/app.css"
});

let copyPlugin = new CopyWebpackPlugin(
  [
    {
      context: path.resolve(__dirname, "src"),
      from: "images/",
      to: "../images/"
    },
    {
      context: path.resolve(__dirname, "src"),
      from: "*.html",
      to: "../",
      test: /\.html$/
    }
  ],
  {}
);

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
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [extractCss, copyPlugin]
};
