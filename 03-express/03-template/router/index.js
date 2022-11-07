const express = require('express')
const { list } = require('../controller')
const { lis } = require('../controller/li-html')

const router = express.Router()

router.get('/api/list', list)
router.get('/api/list-html', lis)


exports.router = router