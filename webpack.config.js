const path = require('path');
const DIST = 'dist';

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, DIST),
  },
  devServer: {
    static: `./${DIST}`,
  },
};
