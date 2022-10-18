const fs = require('fs')

// fs.mkdir('logs', err => {
//     if (err) throw err
//     console.log('文件夹创建成功')
// })

// fs.rename('logs', 'log', () => {
//     console.log('文件夹修改成功')
// })

// fs.rmdir('log', () => {
//     console.log('文件夹删除成功')
// })

// fs.readdir('logs', (err, result) => {
//     if (err) throw err
//     console.log(result)
// })

// fs.writeFile('./logs/log1.log', 'hello\nworld', err => {
//     if (err) throw err
//     console.log('done.')
// })

// fs.appendFile('./logs/log1.log', '!!!', err => {
//     if (err) throw err
//     console.log('done.')
// })

// fs.unlink('./logs/log1.log', err => {
//     if (err) throw err
//     console.log('done.')
// })

// 读取文件方式一，第二个参数指定编码为 utf-8
// fs.readFile('./logs/log1.log', 'utf-8', (err, content) => {
//     if (err) throw err
//     console.log(content)
// })

// 读取文件方式二，用 toString 转换编码
// fs.readFile('./logs/log1.log', (err, content) => {
//     if (err) throw err
//     console.log(content.toString())
// })

// 同步读取文件
// const content = fs.readFileSync('./logs/log1.log')
// console.log(content.toString())
// console.log('continue...')

// 批量写文件
// for (let index = 0; index < 10; index++) {
//     fs.writeFile(`./logs/log${index}.log`,`log-${index}`, err=>{
//         if (err) throw err
//         console.log('done.')
//     })
// }

// 遍历目录
// function myReadDir(dir) {
//     fs.readdir(dir, (err, file) => {
//         if (err) throw err
//         file.forEach((item, index) => {
//             let joinDir = `${dir}/${item}`
//             fs.stat(joinDir, (err, statsObj) => {
//                 if (err) throw err
//                 if (statsObj.isDirectory())
//                     myReadDir(joinDir)
//                 else
//                     fs.readFile(joinDir, 'utf-8', (err, content) => {
//                         if (err) throw err
//                         console.log(content)
//                     })
//             })
//         })
//     })
// }
// myReadDir('./')

// 监视文件内容变化
fs.watch('./logs/log0.log', (eventType, fileName) => {
    console.log(`${fileName} has changed. eventType: ${eventType}`)
})

