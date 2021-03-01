const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, "source"),
  mode: "development",
  performance: { hints: false },
  entry: {
    index: "./pages/index/index.js",
    "colors-and-type": "./pages/colors-and-type/colors-and-type.js",
    "headers-and-footers": "./pages/headers-and-footers/headers-and-footers.js",
    "form-elements": "./pages/form-elements/form-elements.js",
    "cards": "./pages/cards/cards.js",
    "landing-page": "./pages/landing-page/landing-page.js",
    "search-room": "./pages/search-room/search-room.js",
    "room-details": "./pages/room-details/room-details.js",
    "registration": "./pages/registration/registration.js",
    "sign-in" : "./pages/sign-in/sign-in.js"
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "source/assets"),
      pictures: path.resolve(__dirname,"source/assets/pictures")
    }
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "./"
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    open: true,
    port: 9000
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      chunks: ["index"],
      template: "./pages/index/index.pug"
    }),
    new HTMLWebpackPlugin({
      filename: "colors-and-type.html",
      chunks: ["colors-and-type"],
      template: "./pages/colors-and-type/colors-and-type.pug"
    }),
    new HTMLWebpackPlugin({
      filename: "headers-and-footers.html",
      chunks: ["headers-and-footers"],
      template: "./pages/headers-and-footers/headers-and-footers.pug"
    }),
    new HTMLWebpackPlugin({
      filename: "form-elements.html",
      chunks: ["form-elements"],
      template: "./pages/form-elements/form-elements.pug"
    }),
    new HTMLWebpackPlugin({
        filename: "cards.html",
        chunks: ["cards"],
        template: "./pages/cards/cards.pug"
      }),
      new HTMLWebpackPlugin({
        filename: "landing-page.html",
        chunks: ["landing-page"],
        template: "./pages/landing-page/landing-page.pug"
      }),
      new HTMLWebpackPlugin({
        filename: "search-room.html",
        chunks: ["search-room"],
        template: "./pages/search-room/search-room.pug"
      }),
      new HTMLWebpackPlugin({
        filename: "room-details.html",
        chunks: ["room-details"],
        template: "./pages/room-details/room-details.pug"
      }),
      new HTMLWebpackPlugin({
        filename: "registration.html",
        chunks: ["registration"],
        template: "./pages/registration/registration.pug"
      }),
      new HTMLWebpackPlugin({
        filename: "sign-in.html",
        chunks: ["sign-in"],
        template: "./pages/sign-in/sign-in.pug"
      }),
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: "[name].css"
    }),  
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    })
    ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(svg|jpg|png)$/,
        loader: "file-loader",
        options: {
            name: 'assets/pictures/[name].[ext]',
            esModule: false
        },
        
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
            name: '[name].[ext]',
            outputPath: "assets/fonts"
        }
      }
    ]
  }
};
