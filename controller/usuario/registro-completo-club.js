const crearClubModel = require('../../models/crear-club.model');


exports.registroCompletoClub = (req, res)=>{
    res.render('registro-completo-club', {
        nombrePagina: 'Registro Club'
        
    });
}