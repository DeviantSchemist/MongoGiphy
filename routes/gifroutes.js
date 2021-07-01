const router = require('express').Router()
const { Gif } = require('../models')

// GET all gifs
router.get('/gifs', (req, res) => {
  Gif.find()
    .then(gifs => res.json(gifs))
    .catch(err => console.log(err))
})

router.get('/gifs/:id', (req, res) => {
  Gif.findById(req.params.id)
    .then(gif => res.json(gif))
    .catch(err => console.log(err))
})

router.post('/gifs', (req, res) => {
  Gif.create(req.body)
    .then(gif => res.json(gif))
    .catch(err => console.log(err))
})

router.put('/gifs/:id', (req, res) => {
  Gif.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/gifs/:id', (req, res) => {
  Gif.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router