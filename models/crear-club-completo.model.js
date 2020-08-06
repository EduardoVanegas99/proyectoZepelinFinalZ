const sequelize = require('sequelize');

const db = require('../config/db');
const club = require('../models/crear-club.model');

const registroClubCompleto = db.define({
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 

    telefono:{
        type: sequelize.INTEGER, 
        allowNull: {
            args: false, 
            msg: 'Ingrese su telefono'
        }, 
        unique:{
            args: true,
            msg: 'Numero ya utilizado'
        }, 

        max: 10
    }, 

    estado:{
        type: sequelize.STRING(50),
        allowNull:{
            args: false,
            msg: 'Ingrese un estado'
        },
        
    }, 

    ciudad: {
        type: sequelize.STRING(50), 
        allowNull: {
            args: false,
            msg: 'Ingrese una ciudad'
        }


    }, 

    imagen: {
        type: sequelize.TEXT
    }



});

registroClubCompleto.belongsTo(club);

module.exports = registroClubCompleto;