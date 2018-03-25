const supertest = require('supertest')
const expect = require('chai').expect

const server = require('../../server/server')
const mockLocation = require('../mock')
const { sequelize } = require('../../server/models')

const request = supertest(server)

before((done) => {
  sequelize
    .sync({force: true})
    .then(() => {
      done()
    })
})

describe('sms-management-api', () => {
  it('POST /api/v1/locations should create a new Location.', (done) => {
    request
      .post('/api/v1/locations')
      .send(mockLocation.valid1)
      .expect(201)
      .end((err, { body }) => {
        const { id } = body
        expect(id).to.not.be.undefined
        expect(id).to.be.a('number')
        expect(id).to.be.greaterThan(0)
        mockLocation.valid1.id = id
        done()
      })
  })

  it('POST /api/v1/locations should NOT create an invalid Location.', (done) => {
    request
      .post('/api/v1/locations')
      .send(mockLocation.invalid1)
      .expect(400, done)
  })

  it('POST /api/v1/locations should NOT create an already existing Location.', (done) => {
    request
      .post('/api/v1/locations')
      .send(mockLocation.valid1)
      .expect(409, done)
  })

  it ('GET /api/v1/locations should return all Locations created.', (done) => {
    request
      .get('/api/v1/locations')
      .expect(200)
      .end((err, { body }) => {
        expect(body.length).to.equal(1)
        expect(body[0].id).to.equal(mockLocation.valid1.id)
        done()
      })
  })

  it ('GET /api/v1/locations/:id should NOT return a non-existing Location.', (done) => {
    request
      .get('/api/v1/locations/-1')
      .expect(404, done)
  })

  it ('PUT /api/v1/locations/:id should update data of a specific Location.', (done) => {
    request
      .put(`/api/v1/locations/${mockLocation.valid1.id}`)
      .send(mockLocation.valid2)
      .expect(200)
      .end((err, { body }) => {
        expect(body.id).to.equal(mockLocation.valid1.id)
        done()
      })
  })

  it ('PUT /api/v1/locations/:id should NOT update data for a non-existing Location.', (done) => {
    request
      .put('/api/v1/locations/-1')
      .send(mockLocation.valid2)
      .expect(404, done)
  })

  it ('DELETE /api/v1/locations/:id should delete the record of a specific Location.', (done) => {
    request
      .delete(`/api/v1/locations/${mockLocation.valid1.id}`)
      .expect(200)
      .end((err, res) => {
        request
          .get(`/api/v1/locations/${mockLocation.valid1.id}`)
          .expect(404, done)
      })
  })

  it ('DELETE /api/v1/locations/:id should NOT delete a non-existing Location.', (done) => {
    request
      .delete(`/api/v1/locations/${mockLocation.valid1.id}`)
      .expect(404, done)
  })

})
