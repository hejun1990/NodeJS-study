const querystring = require('querystring')
const str = 'id:2/name:小明/age:18/parent:张/parent:王'
// 字符串编码
const escapeStr = querystring.escape(str)
console.log(escapeStr)
// 字符串解码
console.log(querystring.unescape(escapeStr))
console.log(querystring.decode(str, '/', ':'))
