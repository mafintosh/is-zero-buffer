# is-zero-buffer

Check is a buffer only contains `0`s

```
npm install is-zero-buffer
```

[![build status](http://img.shields.io/travis/mafintosh/is-zero-buffer.svg?style=flat)](http://travis-ci.org/mafintosh/is-zero-buffer)

Uses `buffer.compare` to be as fast as possible (~20x faster than checking all bytes in a loop)

## Usage

``` js
var isZero = require('is-zero-buffer')

console.log(isZero(someBuffer)) // returns true is someBuffer only contains 0s
```

## API

#### `var bool = isZero(buffer)`

Returns true if a buffer only contains `0`s, false otherwise.

## License

MIT
