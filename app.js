'use strict'

var express = require("express");
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var cliente_route = require('./routes/cliente');
var port = process.env.PORT || 4201;

var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/proyecto',(err, res) => {
    if(err){
        console.log(err)
    }else{
        app.listen(port, function(){
            console.log('servidor corriendo en el puerto ' + port);
        });
    }
});

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({limit: '50mb' ,extended: true}));

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api', cliente_route);
module.exports = app;