import test from 'ava'
import { readFileSync as read } from 'fs'
import { join } from 'path'

import Fly from 'fly'

const dir = join(__dirname, 'fixtures')
const tmp = join(__dirname, 'tmp')

test('fly-peg', t => {
  const options = {format: 'commonjs'}
  const want = read(`${dir}/parser.js`).toString()
  const fly = new Fly({
    plugins: [
      require('../'),
      require('fly-clear')
    ],
    tasks: {
      * foo (f) {
        yield f.source(`${dir}/parser.pegjs`)
                .peg(options)
                .target(tmp)
        const res = yield f.$.read(`${tmp}/parser.js`, 'utf8')

        t.truthy(res, 'writes output file')
        t.is(res, want, 'produces correct content')

        yield f.clear(tmp)
      }
    }
  })

  t.true('peg' in fly.plugins, 'attach peg() plugin to fly')
  return fly.start('foo')
    .then(() => t.pass('ok'))
    .catch(() => t.fail('should succeed'))
})
