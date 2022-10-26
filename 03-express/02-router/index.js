const express = require('express')
const bodyParser = require('body-parser')

// 路由中间件
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('hello')
})

router.get('/index', (req, res) => {
    const query = req.query
    console.log(query)
    res.json(query)
})

// parse application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false })
// parse application/json
const jsonParser = bodyParser.json()

router.post('/login', urlencodedParser, (req, res) => {
    const data = req.body
    const { username, password } = data
    console.log(`username=${username}, password=${password}`)
    res.send(data)
})

router.post('/api/*', jsonParser, (req, res) => {
    const data = req.body
    const { id: id2, name, password, mobile } = data
    console.log(`id=${id2}, name=${name}, password=${password}, mobile=${mobile}`)
    res.send(data)
})

module.exports = router