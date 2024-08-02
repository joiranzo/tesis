<?php 
    include "../conexion.php";

    $CodMotivo = trim($_GET['id']);
    
    $con=conectar();

    $sql="DELETE FROM Motivos WHERE (CodMotivo='$CodMotivo')";
    
    $query=mysqli_query($con,$sql); 

    if ($query){
        Header("Location: motivos.php");
    } else {
        echo("Error : " . mysqli_error($con));
    }
    
    ?>