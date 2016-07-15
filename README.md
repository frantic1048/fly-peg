# fly-peg

[![fly badge][fly-bgp]][fly-bg] [![npm badge][npm-bgp]][npm-bg] ![download badge][dl-bgp] [![travisbadge][travis-bgp]][travis-bg] [![license badge][license-bgp]][license-bg]

[fly-bgp]: https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square&maxAge=2592000
[fly-bg]: https://github.com/flyjs/fly

[npm-bgp]: https://img.shields.io/npm/v/fly-peg.svg?style=flat-square
[npm-bg]: https://www.npmjs.org/package/fly-peg

[dl-bgp]: https://img.shields.io/npm/dm/fly-peg.svg?style=flat-square

[travis-bgp]: https://img.shields.io/travis/frantic1048/fly-peg.svg?style=flat-square
[travis-bg]: https://travis-ci.org/frantic1048/fly-peg

[license-bgp]: https://img.shields.io/github/license/frantic1048/fly-peg.svg?style=flat-square
[license-bg]: https://spdx.org/licenses/WTFPL.html

[PEG.js][] plugin for *[Fly][]* .

[Fly]: https://github.com/flyjs/fly
[PEG.js]: https://github.com/pegjs/pegjs

## Install

This plugin requires [Fly][] .

```bash
npm i -D fly-peg
```

## Usage

Async/Await flavored:

```js
export async function pasa () {
  await this
    .source('src/myParser.pegjs')
    .peg({
      peg: { // PEG.js options
        optimize: 'speed'
      },
      export: { // export options
        format: 'es'
      }
    })
    .target('dist')
}
```

Generator function flavored:

```js
exports.pasa = function* () {
  yield this
    .source('src/myParser.pegjs')
    .peg({
      peg: { // PEG.js options
        optimize: 'speed'
      },
      export: { // export options
        format: 'es'
      }
    })
    .target('dist')
}
```

fly-peg takes an *optional* option object to work.

If no option passed, fly-peg will build your .pegjs parser as a CommonJS module. So you can easily `require` your parser into a larger application.

The options object contains follow keys:

**peg**

options passed to PEG.js.

See [PEG.js JavaScript API][PEG-options] for *PEG.js options* .

[PEG-options]: http://pegjs.org/documentation#generating-a-parser-javascript-api

**export**

fly-peg output options, contains follow keys:

`format` : output format. it could be:

  - `cjs` (**default**): CommonJS Module.
  - `es` : ES6 Module.
  - `iife` : an IIFE named with `moduleName`.

`moduleName` (needed when `format=iife`): the name of IIFE variable.


## License

[Do What The F*ck You Want To Public License](https://spdx.org/licenses/WTFPL)
