const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.coffee',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: [ 'coffee-loader' ]
      }
    ]
  }
};