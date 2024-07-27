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

