/*
module.exports = {
  parser: false,
  map: false,
  plugins: {
    'autoprefixer': {} //autoprefixer plugin
  }
}
*/
//또는
module.exports = {
  plugins: [
    require('autoprefixer') //autoprefixer plugin
  ]
}
