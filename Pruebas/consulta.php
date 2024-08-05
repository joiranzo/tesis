<?php

$server="localhost:3306";
    $username= "root";  
    $password="";
    $database = "Variables";

    //Conectarce a la base de datos
    $db=new mysqli($server,$username,$password,$database);
  
  //$query=$_POST['sql'];

  $gremios=[];
  $errors=['data'=>false];

  $query='SELECT * FROM ReprGremial';

  $getGremio=$db->query($query); 

  if ($getGremio ->num_rows > 0 ) {
    while ($gremio = $getGremio -> fetch_assoc()) {
        $gremios[]= $gremio;}
        echo json_encode($gremios);}
      else {
        echo json_encode($errors);
  }