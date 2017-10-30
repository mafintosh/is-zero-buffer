var tape = require('tape')
var isZero = require('./')

tape('check blank buffer', function (t) {
  t.ok(isZero(Buffer.alloc(100)))
  t.ok(isZero(Buffer.alloc(1024)))
  t.ok(isZero(Buffer.alloc(4096)))
  t.ok(isZero(Buffer.alloc(4097)))
  t.ok(isZero(Buffer.alloc(40960)))
  t.end()
})

tape('check non blank', function (t) {
  t.notOk(isZero(nonBlank(100)))
  t.notOk(isZero(nonBlank(1024)))
  t.notOk(isZero(nonBlank(4096)))
  t.notOk(isZero(nonBlank(4097)))
  t.notOk(isZero(nonBlank(40960)))
  t.end()
})

function nonBlank (n) {
  var b = Buffer.alloc(n)
  b[b.length - 1] = 1
  return b
}
