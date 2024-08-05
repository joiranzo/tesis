<?php 
    include "../conexion.php";

    $CodMotivo = $_POST['inCodMotivo'];
    $NomMotivo = $_POST['inNomMotivo'];

    $con=conectar();

    if (mysqli_connect_errno()) {
        echo "Falló la conexión a MySQL: " . mysqli_connect_error();
        exit();
    } 
    
    $sql="INSERT INTO Motivos VALUES ('$CodMotivo','$NomMotivo')";
    
    $query=mysqli_query($con,$sql); 

    if ($query){
        Header("Location: motivos.php");
    } else {
        echo("Error : " . mysqli_error($con));
    }
    
    ?>