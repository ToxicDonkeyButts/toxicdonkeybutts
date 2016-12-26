module.exports = {
  context: __dirname,
  entry: {
    main: './src/javascript/Main.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: "./",
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }]
      },
      {
        test: /\.sass$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ],
  }
}