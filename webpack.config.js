module.exports = {
  context: __dirname + '/app/assets/javascripts',
  entry: './es6/index.js',
  output: {
    path: __dirname + '/app/assets/javascripts',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  watch: true
};