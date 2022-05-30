'use strict'

var admin = require('../models/admin');
var bcrypt = require('bcrypt-nodejs');

const registro_admin = async function(req, res){
    var data =  req.body;

    var admins_arr = [];
    admins_arr = await admin.find({email: data.email});

    if(admins_arr.length == 0){
        if(data.password){
            bcrypt.hash(data.password, null, null, async function(err, hash){
                if(hash){
                    data.password = hash
                    var reg = await admin.create(data);
                    res.status(200).send({message:reg});
                }else{
                    res.status(200).send({message:'ErrorServer', data: undefined});
                }
            });
        }else{
            res.status(200).send({message:'No se ha registrado una contraseña', data: undefined});
        }
    }else{
        res.status(200).send({message:'El correo ya se encuentra registrado', data: undefined});
    }
}

module.exports = {
    registro_admin
}