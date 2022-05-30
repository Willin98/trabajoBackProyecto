'use strict'

var moongose = require('mongoose');
var Schema = moongose.Schema;

var AdminSchema = Schema({
    nombres: {type: String, required: true},
    apellidos: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    telefono: {type: String, required: true},
    role: {type: String, required: true},
    dni: {type: String, required: true}
});

module.exports = moongose.model('admin', AdminSchema);