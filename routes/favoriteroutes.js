const router = require('express').Router()
const { Favorite, Gif } = require('../models')

router.get('/favorites', (req, res) => {
  Favorite.find()
    .populate('gifs')
    .then(favorites => res.json(favorites))
    .catch(err => console.log(err))
})

router.get('/favorites:id', (req, res) => {
  
})