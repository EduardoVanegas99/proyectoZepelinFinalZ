const Sequelize = require('sequelize');
const shortId = require('shortid');
const bcript = require('bcrypt');
const db = require('../config/db');
const administrador = db.define('administrador', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    }, 
    
    firstName: {
        type: Sequelize.STRING, 
        allownull: {
            args: false, 
            msg: 'Ingresa un nombre completo'
        }, 
        notEmpty: {
            args: false, 
            msg: 'Nombre completo'
        }

    }, 

    email: {
        type: Sequelize.STRING, 
        allownull: {
            args: false, 
            msg: 'Ingresa un correo electronico'
       }, 
        validate: {
            isEmail: {
                msg: 'Agrega un correo valido'
            } 
        }, 
        unique:{
            args: true, 
            msg: 'Usuario ya registrado'
        }, 

    }, 

    password: {
        type: Sequelize.STRING, 
        allownull: {
            args: false, 
            msg: 'Ingrese una contraseña'
        }
    }
},{
    hooks:{
        beforeCreate(administrador){
            console.log('Creando nuevo administrador');
            console.log(administrador);

            administrador.password = bcript.hashSync(administrador.password, bcript.genSaltSync(10));
        }
    }
})

module.exports = administrador;
