`use strict`

const {Router} = require('express')
const router = Router()

router.use(require('./shows'))
router.use(require('./directors'))

router.get('/', function(req, res) {
  res.json({
    'shows': 'https://api-demo-jufe.herokuapp.com/api/v1/shows',
    'show': 'https://api-demo-jufe.herokuapp.com/api/v1/shows/:showId',
    'favorites': 'https://api-demo-jufe.herokuapp.com/api/v1/shows/favorites?showId=<showId>',
    'showAndItsDirectors': 'https://api-demo-jufe.herokuapp.com/api/v1/shows/directors?showId=<showId>',
    'directors': 'https://api-demo-jufe.herokuapp.com/api/v1/directors',
    'director': 'https://api-demo-jufe.herokuapp.com/api/v1/directors/:directorId'
    'directorAndTheirShows': 'https://api-demo-jufe.herokuapp.com/api/v1/directors/shows?directorId=<directorId>',
  })
})

module.exports = router
