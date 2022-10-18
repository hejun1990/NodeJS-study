const http = require('http')
const querystring = require('querystring')

const server = http.createServer((request, response) => {
    const url = request.url

    let data = ''
    request.on('data', chunk => {
        data += chunk
    })
    request.on('end', () => {
        response.writeHead(200, {
            'Content-Type': 'application/json;charset=utf-8'
        })
        response.write(`{"url": "${url}"}`)
        console.log(data)
        response.write(JSON.stringify(querystring.parse(data)))
        response.end()
    })

})

server.listen(8080, () => {
    console.log('localhost:8080')
})