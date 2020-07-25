const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'linear-array.js',
    library: 'linearArray',
    libraryTarget: 'umd',
  },
};
