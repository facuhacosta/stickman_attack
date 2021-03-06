const path = require('path')

module.exports = {
  entry: './src/app/index.jsx',
  output: {
    path: path.join(__dirname, '/src/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        },
        test: /\.jsx$/,
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|tiff|mp4|webm)$/,
        use: [
          'file-loader?name=assets/[name].[ext]'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
