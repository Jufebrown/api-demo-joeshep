`use strict`

const {Router} = require('express')
const router = Router()

router.use(require('./shows'))
router.use(require('./directors'))

router.get('/', function(req, res) {
  res.json({
    'shows': 'https://api-demo-jufe.herokuapp.com/api/v1/shows',
    'favorites': 'https://api-demo-jufe.herokuapp.com/api/v1/favorites?showId=<showId>',
    'directors': 'https://api-demo-jufe.herokuapp.com/api/v1/directors?showId=<showId>'
  })
})

module.exports = router
