const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

const deps = require("./package.json").dependencies

module.exports = {
  entry: './src/index',
  cache: true,
  
  mode: 'development',

  output: {
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./Products": "./src/App"
      },
      remotes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
}
