'use strict'
const PEG = require('pegjs')

module.exports = function flyPEG (fly) {
  fly.plugin('peg', {every: true}, function * (file, opts) {
    const pegOpt = Object.assign({output: 'source'}, opts)
    const ext = /\..\w+$/
    file.base = file.base.replace(ext, '.js')
    file.data = PEG.generate(file.data.toString(), pegOpt)
  })
}
