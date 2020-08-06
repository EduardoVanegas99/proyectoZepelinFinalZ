
const express = require('express');
const route = express.Router();

//Controladores Visitate
const inicioPagina = require('../controller/visitante/home');
const contactosController = require('../controller/visitante/contactos');

//Controladores Administrador
const registroAdministradorController = require('../controller/administrador/registro-administrador.controller'); 
const registrarClubController = require('../controller/administrador/registro-cub.Controller');
const inicioAdministradorController = require('../controller/administrador/inicio-administrador');
const { Router } = require('express');

//Usuario

const registrarClubCompletoController = require('../controller/usuario/registro-completo-club');


//Pruebas
const emailPruebas = require('../controller/pruebas/email');

module.exports = ()=>{
    
    //Visitante
    route.get('/', inicioPagina.Inicio );
    route.get('/contactos', contactosController.contactosController);


    //Administrador
    //Inicio Administrador

    route.get('/inicio-administrador', inicioAdministradorController.InicioAdministrador );
    
    
    route.get('/registro-admin', registroAdministradorController.registroAdministrador);
    //Insertar Datos
    route.post('/registro-admin', registroAdministradorController.administradorpost);





    //Registrar Clubs

    route.get('/registrar-club', registrarClubController.RegistroClub);
    //ActualizarClub
    //route.get(`/registrar-club/edit/${id}`, registrarClubController.formularioActualizar);
    
    route.post('/registrar-club', registrarClubController.RegistroClubPost);

    //Club por url

    route.get('/mostrar-club/:url', registrarClubController.clubPorUrl);

    //Usuario

    route.get("/registro-completo-club", registrarClubCompletoController.registroCompletoClub );
    


    //Pruebas

    route.get('/emailClub', emailPruebas.email );

    return route;
};



