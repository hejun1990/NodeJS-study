const http = require('http')
const url = require('url')

const server = http.createServer((request, response) => {
    const urlStr = request.url
    const respData = 'hello world!!'
    const urlObj = url.parse(urlStr, true)
    console.log(urlObj)
    switch (urlObj.pathname) {
        case '/api/data':
            response.write(`${urlObj.query.cb}('${respData}')`)
            break
        default:
            response.write('Page Not Found')
    }
    response.end()
})

server.listen(8080, () => {
    console.log('localhost:8080')
})