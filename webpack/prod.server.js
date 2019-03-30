var path = require('path')
var fs = require('fs')

var ROOT_PATH = path.resolve(__dirname, '..')
var SRC_PATH = path.resolve(ROOT_PATH, 'src')
var BUILD_PATH = path.resolve(ROOT_PATH, 'build')

var nodeModules = {}
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => {
    nodeModules[mod] = `commonjs ${ mod }`
  })

module.exports = {
  target: 'node',

  externals: nodeModules,

  devtool: '#source-map',

  context: SRC_PATH,

  entry: {
    index: './server.js',
  },
  output: {
    path: BUILD_PATH,
    filename: './server.js'
  },
  node: {
    __dirname: false,
  },
}
