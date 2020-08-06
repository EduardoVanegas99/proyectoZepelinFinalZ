const express = require('express');
const pug = require('pug');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const route = require('./route/routes');
const app = express();



const port = process.env.PORT || 8000;
//Requerimos los modelos de la base de datos 
require('./models/crear-administrador.model');
require('./models/crear-club.model');
require('./models/crear-club-completo.model');

//requerimos el archivo de la base de datos

const db = require('./config/db');
db.sync()
    .then(console.log(()=> 'Conexion base de datos'))
    .catch(error => console.log(error));



app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: 'supersecreto',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false}
}));

app.use(bodyParser.json());
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, './views'));

app.use(flash());
app.use((req, res, next)=>{ 
    res.locals.mensajes = req.flash();
    next();

})


app.use(express.static('public'));
app.use(express.static('files'));
app.use('/public', express.static('public'));


app.use('/', route());

app.listen(port, ()=>{
   console.log('conexion');
});

require('./handler/email');

