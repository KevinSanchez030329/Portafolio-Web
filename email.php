<?php
    $email = "srkevin7000@gmail.com";
    $name = $_POST["name"];
    $proyect = $_POST["proyect"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    $content = "Nombre: " . $name . "\nCorreo/Numero:" . $email . "\nMensaje: " . $mensaje;
    mail($email, $proyect, $content);
    echo "<script>alert('el mensaje se envio exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\",500)</script>";
?>