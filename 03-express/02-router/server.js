const express = require('express')
const router = require('./index')
const bodyParser = require('body-parser')

const app = express()
// 全局定义body-parser
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
// app.use(bodyParser.json())
app.use('/', router)

app.listen(8080, () => {
    console.log('localhost:8080')
})