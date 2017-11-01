<?php
    $EmailFrom = "kevin.231@hotmail.com";
    $EmailReply = "kevin.231@hotmail.com";
    $Name = Trim(stripslashes($_POST['name']));
    $Email = Trim(stripslashes($_POST['mail']));
    $EmailTo = "jbaccab@ucenfotec.ac.cr";
    $Mensaje = Trim(stripslashes($_POST['mensaje']));
    $Subject = "Mensaje desde la página web";
    $headers = "From: " . strip_tags($EmailFrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($EmailReply) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    // Validation
    $validationOK=true;
    if (!$validationOK) {
      print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
      exit;
    }
    // prepare email body text
    $Body = "<html><body>";
    $Body .= "<h1>Hola, Este correo electrónico es desde la web</h1>";
    $Body .= "<p>Hemos recibido un mensaje de:  ". $Name .",</p>";
    $Body .= "<p>con el email: ". $Email ."</p>";
    $Body .= "\n";
    $Body .= "<p>Mensaje: ". $Mensaje ."</p>";
    $Body .= "\n";
    $Body .= "<br>";
    $Body .= "<br>";
    $Body .= "</body></html>";
    // send email
    $success = mail($EmailTo, $Subject, $Body, $headers);
    // redirect to success page
?>