const http = require('http')
const https = require('https')
const cheerio = require('cheerio')

const server = http.createServer((request, response) => {
    let data = ''
    https.get('https://www.meizu.com/', result => {
        result.on('data', chunk => {
            data += chunk
        })
        result.on('end', () => {
            dataFilter(data)
        })
    })
})

function dataFilter(data) {
    const $ = cheerio.load(data)
    $('.section-item-box>.box-img>p').each((index, el) => {
        console.log($(el).text())
    })
}

server.listen(8080, () => {
    console.log('localhost:8080')
})