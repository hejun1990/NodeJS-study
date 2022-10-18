const myChunk = require('./app.js')

console.log(myChunk([1, 2, 3, 4, 5, 6]))

// 第一次加载某个模块时，Node.js 会缓存该模块
const { name, age } = require('./name')
console.log(name.height)
name.sayName()
console.log(age.age)

name.setHeight(19)
console.log(name.height)
// console.log(name['height'])

// Node.js从缓存中取出name.js模块
// 而不是重新加载name.js模块
const name2 = require('./name')
// height为19，不是18 
console.log(name2.name.height)
