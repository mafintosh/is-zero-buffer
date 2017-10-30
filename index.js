module.exports = isZeroBuffer

var blank = Buffer.alloc(4096)

function isZeroBuffer (buf) {
  if (buf.length > blank.length) realloc(buf.length)
  return buf.compare(blank, 0, buf.length) === 0
}

function realloc (len) {
  var size = blank.length
  while (len > size) size *= 2
  blank = Buffer.alloc(size)
}
