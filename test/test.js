import test from 'ava'
import { readFileSync as read } from 'fs'

import flyPug from '../'

const fly = {
  filter (name, plugin) {
    this[name] = plugin
  }
}

flyPug.call(fly)

test('generate', t => {
  const data = "start = ('a' / 'b')+"
  const options = {}
  const result = fly.peg(data, options)
  t.is(result.ext, '.js')
  t.is(result.code, read('fixtures/parser.js').toString())
})
