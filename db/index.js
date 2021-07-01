module.exports = require('mongoose').connect('mongodb://localhost/gifdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})