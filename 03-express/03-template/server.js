const express = require('express')
const { router } = require('./router')
const path = require('path')

const app = express()

// 静态资源中间件
app.use(express.static('./public'))

// view engine setup
app.engine('art', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    escape: false
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

// 路由中间件
app.use('/', router)

app.listen(8080, () => {
    console.log('localhost:8080')
})