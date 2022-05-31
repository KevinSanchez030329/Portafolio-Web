<?php

$name = $_POST["name"];
$proyect = $_POST["proyect"];
$email = $_POST["email"];
$mensaje = $_POST["mensaje"];
$body = "Correo / Numero: " . $email . "<br>" . $mensaje;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
    
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'kevinsanchez030329@gmail.com';                     //SMTP username
    $mail->Password   = '*******';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom("kevinsanchez030329@gmail.com", $name);
    $mail->addAddress("kevinsanchez030329@gmail.com");     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $proyect;
    $mail->Body    = $body;

    $mail->send();
    echo '<script>
            alert("El mensaje se envio exitosamente");
            window.history.go(-1);
            </script>';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>