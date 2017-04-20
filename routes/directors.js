`use strict`

const {Router} = require('express')
const router = Router()

const {getDirector, getDirectors, getDirectorShows} = require('../controllers/directorCtrl')

router.get('/directors', getDirectors)
router.get('/directors/shows', getDirectorShows)
router.get('/directors/:id', getDirector);

module.exports = router
