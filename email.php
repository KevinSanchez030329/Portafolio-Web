<?php
    $email = "srkevin7000@gmail.com";
    $name = $_POST["name"];
    $proyect = $_POST["proyect"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];
    $content = "Nombre: " . $name . "\nProyecto: " . $proyect . "\nCorreo/Numero:" . $email . "\nMensaje: " . $mensaje;
    mail($email, $proyect, $content);
    header ("Location:form.html");
?>