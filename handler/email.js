const nodemailer = require('nodemailer');
const pug = require('pug');
const juice = require('juice');
const htmlToText = require('html-to-text');

const util = require('util');
const emailConfig = require('../config/mail');


 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    
    auth: {
      user: emailConfig.user, // generated ethereal user
      pass: emailConfig.password, // generated ethereal password
    }
  });


  const generarHtml = ()=>{
      const html = pug.renderFile(`${__dirname}/../views/email/emailClub.pug`);
        return juice(html);
    }

    exports.enviar = /*async */()=>{
         // send mail with defined transport object
  let opcionesEmail = {
    from:  'Proyecto Zepelin <no reply>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Registrar Club", // Subject line
    text: "Hello world?", // plain text body
    html: generarHtml(), // html body
  };
  /*
    const enviarEmail = util.promisify(transporter.sendMail. transporter);
    return enviarEmail.call(transporter, opcionesEmail);

    */
      //transporter.sendMail(info)

      
    transporter.sendMail(opcionesEmail)

    console.log("Message sent: %s", info.messageId);
}

 
 
  