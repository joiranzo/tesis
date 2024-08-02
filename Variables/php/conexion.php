<?php

function conectar(){
    $host="localhost:3306";
    $user= "root";  
    $pass="";
    
    $db = "Variables";

    $con=mysqli_connect($host,$user,$pass,$db);
    
    mysqli_select_db($con,$db);
   
    if (mysqli_connect_errno()) {echo "Error".mysqli_connect_error();}
      
    return $con;
}

function consulta($tabla,$filtro){

    $con=conectar();
    
    
    if (is_null($filtro))
        $sql = "SELECT * FROM $tabla";
    else
        $sql = "SELECT * FROM $tabla WHERE $filtro";
            


    $query = mysqli_query($con, $sql);
       
    return mysqli_fetch_array($query);
    
}

