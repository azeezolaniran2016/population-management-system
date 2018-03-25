const { Location, sequelize } = require('../models')
const log = require('../util/logger')
const responseHandler = require('../util/responseHandler')

const resultFields = ['id', 'name', 'femalePopulation', 'malePopulation', [sequelize.literal(
  '("Location"."femalePopulation" + "Location"."malePopulation")'), 'totalPopulation']]
const inputFields = ['femalePopulation', 'malePopulation', 'name', 'parentID']

module.exports = {
  create(req, res) {
    const location = req.body
    Location.create(location, {
        fields: inputFields,
      })
      .then(data => {
        log.debug('create.Location', { data })
        return responseHandler.handle201(res, { id: data.id })
      })
      .catch(err => {
        log.error('create.Location error', { err })
        return responseHandler.handleErr(err, res)
      })
  },

  update(req, res) {
    const location = req.body
    const { id } = req.params
    log.debug('update.Location', { location, id })
    Location.update(location, {
      where: { id },
      fields: inputFields,
    }).then(data => {
      log.debug('update.Location', { data })
      if (data[0] > 0) {
        return responseHandler.handle200(res, { id: Number(id) })
      }
      return responseHandler.handle404(res, `Could not update Location with id ${id}`)
    }).catch(err => {
      log.error('update.Location error', { err })
      return responseHandler.handleErr(err, res)
    })
  },

  delete(req, res) {
    const { id } = req.params
    log.debug('delete.Location', { id })

    Location.destroy({ where: { id }})
      .then(data => {
        log.debug('delete.Location', data)
        if (data <= 0) {
          return responseHandler.handle404(res, `Failed to delete Location with id ${id}. Not found.`)
        }
        return responseHandler.handle200(res, { msg: 'Location deleted'})
      })
      .catch(err => {
        log.error('delete.Location error', err)
        return responseHandler.handleErr(err, res)
      })
  },

  locations(req, res) {
    Location.findAll({
        attributes: resultFields,
        include: [{
          model: Location, 
          as: 'subLocations',
          attributes: ['id'],
        }],
      })
      .then(data => {
        log.debug('all.Location', { data })
        return responseHandler.handle200(res, data)
      })
      .catch(err => {
        log.error('all.Location error', { err })
        return responseHandler.handleErr(err, res)
      })
  },

  location(req, res) {
    const { id } = req.params
    Location.findById(id, {
        attributes: resultFields,
        include: [{
          model: Location, 
          as: 'subLocations',
          attributes: ['id'],
        }],
      })
      .then(data => {
        log.debug('one.Location', { data })
        if (data) {
          return responseHandler.handle200(res, data)
        }
        return responseHandler.handle404(res,  `Location with id ${id} not found.`)
      })
      .catch(err => {
        log.error('one.Location error', { err })
        return responseHandler.handleErr(err, res)
      })
  }
}
