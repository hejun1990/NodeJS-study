const http = require('http')
const querystring = require('querystring')

const server = http.createServer((request, response) => {
    const url = request.url

    let data = ''
    request.on('data', chunk => {
        console.log(`chunk: ${chunk}`)
        data += chunk
    })
    request.on('end', () => {
        response.writeHead(200, {
            'Content-Type': 'application/json;charset=utf-8'
        })
        response.write(`{"url": "${url}"}\n`)
        console.log(`data: ${data}`)
        response.write(JSON.stringify(querystring.parse(data)))
        response.end()
    })

})

server.listen(8080, () => {
    console.log('localhost:8080')
})