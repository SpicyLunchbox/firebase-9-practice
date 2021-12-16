const path = require('path') // path object

module.exports = {
  mode: 'development',
  entry: './src/index.js', // where webppack initially looks for a javascript source file
  output: {
    path: path.resolve(__dirname, 'dist'),  // __dirname does gets the current directory of this file
    filename: 'bundle.js'
  },
  watch: true, // everytime we make a change, the new code will be bundled up into bundle.js
}