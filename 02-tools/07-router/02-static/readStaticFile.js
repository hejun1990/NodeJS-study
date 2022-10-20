const path = require('path')
const mime = require('mime')
const fs = require('fs')

function readStaticFile(filePathName) {
    let data = 'file not found.'
    let type = 'text/html'
    if (fs.existsSync(filePathName)) {
        const stats = fs.statSync(filePathName)
        if (stats.isFile()) {
            const ext = path.parse(filePathName).ext
            type = mime.getType(ext)
            data = fs.readFileSync(filePathName)
        }
    }
    return {
        data,
        type
    }
}

module.exports = readStaticFile