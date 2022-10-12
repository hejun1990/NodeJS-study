const fs = require('fs')

fs.writeFile('./log.txt', '你好，世界', (err, data) => {
    if (err) {

    } else {
        console.log('文件创建成功')
    }
})