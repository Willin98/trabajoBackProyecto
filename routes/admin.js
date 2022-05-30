'use strict'

var express = require('express');
var adminController = require('../controllers/adminController');

var api = express.Router();

api.post('/registro_admin',adminController.registro_admin);

module.exports= api;