`use strict`

const {bookshelf} = require('../db/database')
const Director = require('../models/director')

module.exports.getDirectors = (req, res, next) => {
  Director.getAll()
  .then((directors) => {
    res.status(200).json(directors)
  })
  .catch((error) => {
    next(error)
  })
}

module.exports.getDirector = ({params: {id}}, res, next) => {
  Director.getSingleDirector(id)
  .then( (director) => {
    res.status(200).json(director)
  })
  .catch( (error) => {
    next(error);
  });
};

module.exports.getDirectorShows = ({query: {directorId}}, res, next) => {
  console.log('getting a director and shows', directorId)
  Director.forge({id: directorId})
  .fetch({withRelated: ['shows'], require: true})
  .then((direcShows) => {
    res.status(200).json(direcShows)
  })
  .catch((err) => {
    next(err)
  })
}
