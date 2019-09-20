const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

let config_docs = {
  mode : process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  entry:  {
    app : './docs-src/js/app.js',
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    port: 9000
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.(sa|sc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader', options: {
            sourceMap: devMode ? true : false,
          }
        },
        {
          loader: 'postcss-loader', options: {
            sourceMap: devMode ? true : false,
          }
        },
        {
          loader: 'sass-loader', options: {
            sourceMap: devMode ? true : false,
          }
        }
      ],
    },{
      test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './docs-src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    })
  ]
}


let config = {
  mode : process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  entry:  {
    'respondots' : './src/respondots.js',
    'respondots.min' : './src/respondots.js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: 'var',
    library: 'Respondots',
    libraryExport: 'default'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [new CleanWebpackPlugin()]
}

if(devMode) {
  module.exports = config_docs;
} else {
  module.exports = [config_docs, config];
}
