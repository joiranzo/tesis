<?php
    
    $server="localhost:3306";
    $username= "root";  
    $password="";
    $daatabase = "Variables";

    //Conectarce a la base de datos
    $db=new mysqli($server,$username,$password,$database);
    
    if ($db->connect_error) {
        die('Error al conectar a la base de datos: '. $db->connect_error);
    }
      
    



