// By default, Mocha searches for tests with a “test” folder.
// That configuration can be changed with a mocha.opts file

process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const {knex} = require('../db/database')
chai.use(chaiHttp)

// overall describe block
describe('Shows routes', () => {
  // before it runs test it will rollback, migrate and seed
  beforeEach(() => {
    return knex.migrate.rollback()
    .then(() => {
      return knex.migrate.latest()
    })
    .then(() => {
      return knex.seed.run()
    })
  })
  // describe block for getting all shows
  describe('Get all the shows', () => {
    it('should get all shows', () => {
      return chai.request(server)
      .get('/api/v1/shows')
      .then((res) => {
        res.should.have.status(200)
        res.should.be.json
        res.body.should.be.a('array')
        res.body[0].should.have.property('name')
        res.body[0].name.should.equal('Mr. Robot')
      })
    })
  })
  describe('GET /api/v1/shows/:id', () => {
    it('should return a single show', () => {
      return chai.request(server)
      .get('/api/v1/shows/1')
      .then((res) => {
        res.should.have.status(200)
        res.body.should.be.json
        res.body.should.be.a('object')
        res.body.should.have.property('name')
        res.body.name.should.equal('Mr. Robot')
      })
    });
  });
})
