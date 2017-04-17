// By default, Mocha searches for tests with a “test” folder.
// That configuration can be changed with a mocha.opts file

process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const knex = require('../db/database')
chai.use(chaiHttp)

// overall describe block
describe('Shows routes', () => {
  // before it runs test it will rollback, migrate and seed
  beforeEach(() => {
    return knex.migrate.rollback()
  })
  .then(() => {
    return knex.migrate.latest()
  })
  .then(() => {
    return knex.seed.run()
  })
  // describe block for getting all shows
  describe('Get all the shows', () => {
    it('should get all shows', () => {
      return chai.request(server)
      .get('/api/v1/shows')
      .then((res) => {
        res.should.have.status(200)
      })
    })
  })
})
