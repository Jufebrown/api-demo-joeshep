`use strict`

const {Router} = require('express')
const router = Router()

const {getShow, getShows, getShowFaves, addShow, deleteShow, getShowDirectors} = require('../controllers/showCtrl')

router.get('/shows', getShows)
router.get('/shows/favorites', getShowFaves)
router.get('/shows/directors', getShowDirectors)
router.get('/shows/:id', getShow);
router.post('/shows/new', addShow)
router.delete('/shows/:id', deleteShow)

module.exports = router
