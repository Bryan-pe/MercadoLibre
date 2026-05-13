<?php
    try {
        $db = new SQLite3("../bd/db_mercado");
        /*echo "conexion exitosa";*/
    }catch(Exception $e){
        die("Error de la conexion: ".$e->getMessage());
    }
?>