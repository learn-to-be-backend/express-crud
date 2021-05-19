const express = require('express')
const tourController = require('../controller/tourControllers')

const Router = express.Router()

Router.route('/')
  .get(tourController.getAllTour)
  .post(tourController.createTour)

Router.route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour)

module.exports = Router;