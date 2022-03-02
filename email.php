<?php
    $name= $_POST["name"];
    $asunto= $_POST["asunto"];
    $email= $_POST["email"];
    $mensaje= $_POST["mensaje"];
    $content= "name:" . $name . "\nemail:" . $email . "\nmensaje:" . $mensaje;
    mail("kevinsanchez030329@gmail.com",$asunto,$content);
    header ("Location:gracias.html");
?>