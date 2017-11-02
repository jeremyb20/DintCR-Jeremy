var express = require('express');
var	router = express.Router();
var mailController = require('./mail.controller.js');


//Declaracion de las rutas

router.route('/mail')
  .post(function(req, res){
    mailController.send (req,res);
 	});





// Se exporta el modulo
module.exports = router;
