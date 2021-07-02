const router = require('express').Router()

router.use('/api', require('./gifroutes.js'))
router.use('/api', require('./favoriteroutes'))

module.exports = router