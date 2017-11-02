// var express = require('express');
// var app = express();
// var nodemailer = require('nodemailer');
//
// app.set('port', (process.env.PORT || 5000));
//
// app.use(express.static(__dirname + '/public'));
//
// app.use( function(req, res, next){
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });
// var mailRoute = require('./mail/mail.route');
//
// app.use('/mail', mailRoute);
// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
//
// app.get('/', function(request, response) {
//   response.render('pages/index');
// });
//
// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

// Se establecen las dependencias que Node va a utilizar
var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    nodemailer = require('nodemailer');


// se le indica al servidor la tarea a ejecutar
//app.set('port', (process.env.PORT || 5000));
var port = 5000;
var server = app.listen(port,_server());


// Por medio de express se genera la conexión entre el index.js, server.js y el front-end
app.use(express.static(path.join(__dirname, 'public')));

// Se indica que el formato en el que se reciben los datos va a ser JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

// Se definen los verbos que express va a reconocer como parte de la petición que se realiza desde el front-end (public)
app.use( function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
// Se definen las rutas que van estar ligadas a toda la funcionalidad de la aplicacion
var mailRoute = require('./components/mail/mail.route');
//
app.use('/api', mailRoute);

// Se guarda todo lo que se ha realizado
module.exports = app;


function _server(){
  console.log('Conexion establecida en el puerto ' + port);
}
