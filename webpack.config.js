var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
  devServer: {
    writeToDisk: true
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      images: path.join(__dirname, 'src/images'),
      fonts: path.join(__dirname, 'src/fonts')
    }
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  entry: [
    './src/js/index.js',
    './src/scss/main.scss'
  ],
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Index',
      filename: 'index.html',
      template: 'src/templates/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Home Page',
      filename: 'home_page.html',
      template: 'src/templates/home_page.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.min.css'
    })
  ],
  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devtool: 'inline-source-map'
};
