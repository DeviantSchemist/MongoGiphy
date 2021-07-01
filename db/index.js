module.exports = require('mongoose').connect('mongodb://localhost/gif', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})