const express = require('express')

const app = express()


const middleware = [
    (req, res, next) => {
        const urlStr = req.url
        console.log(`${urlStr}: 1`)
        next()
    }, (req, res, next) => {
        const urlStr = req.url
        console.log(`${urlStr}: 2`)
        next()
    }, (req, res, next) => {
        const urlStr = req.url
        console.log(`${urlStr}: 3`)
        next()
    }
]
// 中间件栈
app.use('/', middleware)
app.use('/ajax', (req, res, next) => {
    const urlStr = req.url
    console.log(`${urlStr}: ajax`)
    next()
})
app.use('/api', (req, res) => {
    const urlStr = req.url
    console.log(`${urlStr}: hello`)
    res.send('world')
})

app.listen(8080, () => {
    console.log('localhost:8080')
})
