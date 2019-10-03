const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
module.exports = {
  entry: './src/ryo.scss',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'ryo.css'
    })
  ]
}
