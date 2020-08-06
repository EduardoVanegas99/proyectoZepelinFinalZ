
const Sequelize = require('sequelize');
const db = require('../config/bd');


const crearUsuarioModel = db.define('crearUsuario', {
    
    id: {
        type: INTEGER, 
        allowNull: false,
        autoIncrement: true
    },

    
    nombre:{
        type: Sequelize.STRING, 
        allowNull:{
            args: false, 
            msg: 'Ingrese un nombre de usuario'
        }
    }, 

    edad:{
        type: Sequelize.INTEGER,
        allowNull: {

            args: false,
            msg: 'Ingrese su edad'

        }, 
    
    telefono:{
        type: Sequelize.INTEGER, 
        allowNull: {
            args: false,
            msg: 'Ingrese su numero telefonico'
        }, 

        unique: {
            args: true, 
            msg: 'Numero ya registrado, ingrese uno nuevo'
        }
    }, 

    manoPreferente: {
        type: Sequelize.STRING,
        allowNull:{
            args: false, 
            msg: 'Ingrese su mano Preferente'
        }

    }, 
    estado: {
        type: Sequelize.STRING,
        allowNull:{
            args: false, 
            msg: 'Ingrese un estado'
        }

    }, 

    ciudad:{
        type: Sequelize.STRING, 
        allowNull:{
            args: false, 
            msg: 'Ingrese una ciudad'
        }

    }, 

    clubFk:{
        type: Sequelize.STRING

    }



    }

});

module.exports = crearUsuarioModel;