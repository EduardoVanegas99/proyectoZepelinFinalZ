const Sequelize = require('sequelize');

const db = require('../config/db');
const slug = require('slug');
const shortId = require('shortid');



const crearClub = db.define('crearClub', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },


    
    nombreClub:{
        type: Sequelize.STRING(50),
        isNull: {
            args: false,
            msg: 'Ingrese un nombre'
            
        },
        
        unique: {
            args: true,
            msg: 'Nombre de club existente'
        }
    },
        genero: {
            type: Sequelize.STRING(10),
            isNull:{
                args: false,
                msg: 'Ingrese un genero'
                

            }

        },

        email:{
            type: Sequelize.STRING(50),
            isNull: {
                args: false,
                msg: 'Ingrese un correo electronico'
            }, 
            unique:{
                args: true,
                msg: 'Correo ya utilizado'
            }
        },
        
        genero:{
            type: Sequelize.STRING,
            isNull: {
                args: false,
                msg: 'Ingrese un genero'
            }
        },


        url: {
            type: Sequelize.STRING
            

        }, 

       
           
        
        
    


}, {
    hooks:{
        beforeCreate(club){
            const  url = slug(club.nombreClub).toLowerCase();

            club.url = `${url}-${shortId.generate()}`;
        }
    }
});

module.exports = crearClub;