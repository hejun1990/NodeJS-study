const http = require('http')
const url = require('url')

const server = http.createServer((request, response) => {
    const urlStr = request.url
    const respData = { 'ret': true, 'data': '你好' }
    const urlObj = url.parse(urlStr, true)
    switch (urlObj.pathname) {
        case '/api/data':
            response.writeHead(200, {
                'content-type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            })
            response.write(JSON.stringify(respData))
            break
        default:
            response.write('Page Not Found')
    }
    response.end()
})

server.listen(8080, () => {
    console.log('localhost:8080')
})