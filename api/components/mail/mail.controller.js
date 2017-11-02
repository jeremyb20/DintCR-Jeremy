var nodemailer = require('nodemailer');
module.exports.send = function(req,res){ //exporta el controlador


  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jbacca.test',
      pass: 'jeremy123'
    }
  });

  var mailOptions = {
    from: req.body.from,
    to: 'jbacca.test@gmail.com', //correo al que se desea mandar la información
    subject: req.body.subject,
    text: req.body.text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}
