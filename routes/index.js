const router = require('express').Router()

router.use('/api', require('./gifroutes.js'))

module.exports = router