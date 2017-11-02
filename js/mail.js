document.querySelector('#btnEnviar').addEventListener('click',enviarMail);




function enviarMail(){
  console.log('entro');
  var sNombre = document.querySelector('#txtNombre').value;
  var sEmail = document.querySelector('#txtEmail').value;
  var sTel = document.querySelector('#txtPhone').value;
  var sMensaje = document.querySelector('#txtMensaje').value;

  var sCorreo = 'Saludos mi nombre es ' + sNombre + ' y requiero lo siguiente: ' + sMensaje + ' adjunto mi teléfono: ' + sTel + ' y correo electrónico ' + sEmail;

  //request es quien establece la conexion con el php
  var request = $.ajax({
    url: 'http://localhost:5000/api/mail',
    dataType: 'json',
    async: false,
    method: 'POST',
    data:{
      subject: 'Quiero información',
      text: sCorreo,
      from: sEmail
    }
  });
  //Peticion que recibe los datos y los almacena en el arreglo si la conexion es exitosa
  request.done(function(){
    console.log('enviado');
  });
  //Si la conexion falla, imprime en consola un mensaje
  request.fail(function(){
    console.log('Error de conexion');
  });

}
