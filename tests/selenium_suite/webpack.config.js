const path = require('path')

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname,
    library: 'test',
    libraryTarget: 'window',
    libraryExport: 'default'
  },
};