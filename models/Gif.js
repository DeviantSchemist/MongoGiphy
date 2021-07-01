const { model, Schema } = require('mongoose')

const Gif = new Schema({
  name: String,
  url: String
})

module.exports = model('Gif', Gif)