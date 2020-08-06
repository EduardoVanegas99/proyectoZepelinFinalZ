const crearClubModel = require('../../models/crear-club.model');


exports.RegistroClub = async(req, res)=>{

    const registroClubMostrar = await crearClubModel.findAll();
    res.render('registrar-club', {
        nombrePagina: 'Crear-club', 
        registroClubMostrar
    });
}



exports.RegistroClubPost = async(req, res)=>{
    console.log(req.boy);
   const {nombreClub,   email, genero} = req.body;

    try {
        await crearClubModel.create({
            nombreClub, 
            email, 
            genero
        });
    } catch (error) {
        console.log(error);
    }

}

//Visualizar por Url

exports.clubPorUrl = async(req, res)=>{
    const clubUrl = await crearClubModel.findOne({
        where: {
            url: req.params.url
        }
    })




    res.render('mostrar-club', {
        clubUrl
    })
}

//Actualizar 

exports.formularioActualizar = (req, res)=>{
    res.render('registrar-club',{
        
    })
}

