const express = require('express')
const { router } = require('./router')

const app = express()

// 静态资源中间件
app.use(express.static('./public'))

// 路由中间件
app.use('/', router)

app.listen(8080, () => {
    console.log('localhost:8080')
})