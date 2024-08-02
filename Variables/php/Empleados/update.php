<?php

include "../conexion.php";

$con=conectar();

$valor1=$_POST["Legajo"];
$valor2=$_POST["NomApe"];
$valor3=$_POST["Email"];
$valor4=$_POST["RelRepreGremial"];
$valor5=$_POST["RelPuesto"];
$valor6=$_POST["RelSupInmed"];
$valor7=$_POST["RelSupervision"];
$valor8=$_POST["RelCoordinador"];
$valor9=$_POST["RelCoordinacion"];
$valor10=$_POST["RelSubRegion"];
$valor11=$_POST["RelEncargTiempo"];


$sql="UPDATE Dotacion SET NomApe='$valor2',Email='$valor3',RelReprGremial=$valor4,
RelPuesto=$valor5,RelSupInmed=$valor6,RelSupervision=$valor7,RelCoordinador=$valor8,
RelCordinacion=$valor9,RelSubRegion=$valor10,RelEncargTiempos=$valor11 WHERE Legajo=$valor1";

echo $sql;

$query=mysqli_query($con,$sql);

if ($query){
    Header("Location: dotacion.php");
} else {
    echo("Error : " . mysqli_error($con));
}
?>