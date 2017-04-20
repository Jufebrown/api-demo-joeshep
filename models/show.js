`use strict`

const {bookshelf} = require('../db/database')
require('./favorite')
require('./director')
require('./show_director')

const Show = bookshelf.Model.extend({
  tableName: 'shows',
  upvotes: function() {return this.hasMany('Favorite')}
},{
  getAll: function() {
    console.log('Get all called from Show Model')
    return this.forge()
    .fetchAll()
    .then((rows) => {
      return rows
    })
    // error catcher for fetch all
    .catch((error) => {
      return error
    })
  },
  getSingleShow: function(id) {
    // console.log("show id", id);
    return this.forge({id})
    .fetch()
    .then( (show) => {
      return show
    })
    .catch( (error) => {
      // console.log("error??", error);
      return error
    })
  }
})

module.exports = bookshelf.model('Show', Show)
