const fs = require('fs')
const zlib = require('zlib')

const readStream = fs.createReadStream('./node.txt')
const writeStream = fs.createWriteStream('./node2.gzip')

const glib = zlib.createGzip()

readStream
    .pipe(glib)
    .pipe(writeStream)