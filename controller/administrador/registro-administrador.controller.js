const registroAdministradorModel = require('../../models/crear-administrador.model');

exports.registroAdministrador = ( req, res)=>{
    res.render('registro-admin');
}



exports.administradorpost = async(req, res)=>{
    console.log(req.body);

    const {firstName, email, password,  repeatPasswordAdmin} = req.body;

    try {
        if(password === repeatPasswordAdmin){
            
            await registroAdministradorModel.create({
                firstName, 
                email,
                password 
            });

        }
        
        res.redirect('/registro-admin')
    } catch (error) {
        console.log(error);
        

        //req.flash('error', error.map(error => error.msg));
        req.flash('error', error.errors.map(error => error.message));
        res.render('registro-admin', {
          //error: error.errors
        mensajes: req.flash()

        
        });
        

    }
  


}