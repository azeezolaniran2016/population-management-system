const controller = require('../controller/Location')

module.exports = {
  configureRoutes(router) {
    router
      .get('/locations', controller.locations)
      .get('/locations/:id', controller.location)
      .put('/locations/:id', controller.update)
      .delete('/locations/:id', controller.delete)
      .post('/locations', controller.create)
  }
}
