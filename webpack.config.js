const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
    filename: 'linear-array.js',
    library: 'lineArr',
    libraryTarget: 'umd',
  },
};
