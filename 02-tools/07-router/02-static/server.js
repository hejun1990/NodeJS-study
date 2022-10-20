const http = require('http')
const path = require('path')
const readStaticFile = require('./readStaticFile')

http.createServer((req, res) => {
    const urlStr = req.url
    const filePathName = path.join(__dirname, '/public', urlStr)
    console.log(filePathName)
    const { data, type } = readStaticFile(filePathName)
    res.writeHead(200, {
        'Content-Type': `${type}`
    })
    res.write(data)
    res.end()
}).listen(8080, () => {
    console.log('localhost:8080')
})