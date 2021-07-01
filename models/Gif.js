const { model, Schema } = require('mongoose')

const Gif = new Schema({
  url: String
})

module.exports = model('Gif', Gif)