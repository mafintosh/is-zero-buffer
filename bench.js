var isZero = require('./')

var buf = Buffer.alloc(65536)
var then = Date.now()

for (var i = 0; i < 100000; i++) {
  isZero(buf)
}

console.log(Date.now() - then)
