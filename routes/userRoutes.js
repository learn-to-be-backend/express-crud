const express = require('express')
const userControllers = require('../controller/userControllers')

const Router = express.Router()

Router.route('/')
  .get(userControllers.getAllUsers)
  .post(userControllers.createUsers)

Router.route('/:id')
  .get(userControllers.getUsersById)
  .patch(userControllers.updateUsers)
  .delete(userControllers.deleteUsers)

  module.exports = Router;