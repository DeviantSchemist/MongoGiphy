const { model, Schema } = require('mongoose')

const Favorite = new Schema({
  gifs: [{
    type: Schema.Types.ObjectId,
    ref: 'Gif'
  }]
})

module.exports = model('Favorite', Favorite)