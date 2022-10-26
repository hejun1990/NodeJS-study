const express = require('express')
const fs = require('fs')
const path = require('path')
const mime = require('mime')

const app = express()

app.use('/', (req, res) => {
    const urlStr = req.url
    const ext = path.parse(urlStr).ext
    let data = 'hello'
    if (ext) {
        if (ext == '.ico') {
            data = fs.readFileSync('./favicon.ico')
            const mimeType = mime.getType(ext)
            console.log(mimeType)
            res.status(200).append('Content-Type', `${mimeType}`)
        }
    }
    res.send(data)
})

app.listen(8080, () => {
    console.log('localhost:8080')
})
