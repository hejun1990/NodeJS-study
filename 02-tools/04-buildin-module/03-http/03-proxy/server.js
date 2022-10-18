const http = require('http')
const url = require('url')
const { createProxyMiddleware } = require('http-proxy-middleware')

const server = http.createServer((request, response) => {
    const urlStr = request.url
    if (/\/api/.test(urlStr)) {
        const proxy = createProxyMiddleware('/api', {
            target: 'https://gate.lagou.com/v1/entry/positionsearch/searchPosition/v2',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
        proxy(request, response)
    } else {
        console.log('error')
    }
})

server.listen(8080, () => {
    console.log('localhost:8080')
})