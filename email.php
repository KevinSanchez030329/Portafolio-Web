<?php
    $destino= "srkevin7000@gmail.com";
    $name= $_POST["name"];
    $asunto= $_POST["asunto"];
    $email= $_POST["email"];
    $mensaje= $_POST["mensaje"];
    $content= "name:" . $name . "\nemail:" . $email . "\nmensaje:" . $mensaje;
    mail($destino,$asunto,$content);
    header ("Location:gracias.html");
?>