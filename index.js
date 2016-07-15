const assign = require('object-assign')
const PEG = require('pegjs')

module.exports = function flyPEG () {
  'use strict'
  return this.filter('peg', function plugin (data, options) {
    const expOpt = options.export || {}
    const pegOpt = options.peg
    const parser = PEG.buildParser(
      data.toString(),
      assign({output: 'source'}, pegOpt)
    )

    let result
    switch (expOpt.format) {
      case 'es':
        result = 'export default ' + parser
        break
      case 'iife':
        result = 'var ' + expOpt.moduleName + '=' + parser
        break
      case 'cjs':
      default:
        result = 'module.exports = ' + parser + ';'
    }

    return {
      code: result,
      ext: '.js'
    }
  })
}
