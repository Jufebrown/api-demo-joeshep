`use strict`

const {bookshelf} = require('../db/database')
require('./show')

const Favorite = bookshelf.Model.extend({
  tableName: 'favorites',
  // for one to many relationship
  show: function() {return this.belongsTo('Show')}
},{
  getAll: function() {
    console.log('Get all called from Favorite Model')
    return this.forge()
    // bookshelf method
    .fetchAll()
    .then((rows) => {
      return rows
    })
    // error catcher for fetch all
    .catch((error) => {
      return error
    })
  }
})

module.exports = bookshelf.model('Favorite', Favorite)
