<?php 
    include "../conexion.php";

    $CodMotivo = trim($_POST['CodMotivo']);
    $NomMotivo = trim($_POST['NomMotivo']);
    
    $con=conectar();

    $sql="UPDATE Motivos SET NomMotivo = '$NomMotivo' WHERE (CodMotivo='$CodMotivo')";
    
    $query=mysqli_query($con,$sql); 

    if ($query){
        Header("Location: motivos.php");
    } else {
        echo("Error : " . mysqli_error($con));
    }
    
    ?>