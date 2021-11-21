const express = require('express');

const route = express.Router();

const services = require('../services/render');

const userController = require('../controller/userController');
const serviceController = require('../controller/serviceController');



route.get('/', services.homeRoutes)

route.get('/login', services.login)

route.get('/register', services.signup)

route.get('/service', services.service)

route.post('/api/users', userController.add)

route.post('/api/service', serviceController.create)

module.exports = route