<?php
    include "../conexion.php";
    $IdTipoNovedad = $_POST['IdTipoNovedad'];
    $filtro = "IdTipoNovedad='$IdTipoNovedad'";
    $row=consulta('TiposNovedades',$filtro );
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" href="../../css/motivos.css">
    <link rel="stylesheet" href="../../css/dotacion.css">
    <link rel="stylesheet" href="../../css/comun.css">
    <title>Tipos de Novedades</title>
</head>

<body>

    <div class="conte_gral">
        <div class="barra_menu">
            <h3>Tipos de Novedades</h3>
            <div>
                <a class="material-symbols-outlined bt_azul" href="">home</a>
            </div>
        </div>

        <div class="table">
            <div class="titulos">
                <div class="c1">Actualización</div>
               
            </div>

            <form action="update.php" method="post" id="nuevo">
                <!-- Primera fila -->
                <div class="cont_horiz">
                    <!-- Codigo de novedad -->
                    <div class="cont_vert">
                        <label for="">Código de Novedad</label>
                        <input type="text" size="7" name="Legajo" readonly value="<?php echo $IdTipoNovedad ?>">
                    </div>
                       
                    <!-- Descripción -->
                    <div class="cont_vert">
                        <label for="">Descripción</label>
                        <input type="text" name="NomApe" value="<?php echo $row[1] ?>">
                    </div>

                        <!-- Rango Horario -->
                        <div class="cont_vert">
                        <label for="">Rango Horario</label>
                        
                        <Input type="checkbox" name="RelSupInmed" value="<?php echo $row[5] ?>">
                            
                        
                    </div>
     
                <!-- Motivo -->
                    <div class="cont_vert">
                        <label for="">Motivo</label>
                        <Input name="RelSupervision" type="checkbox" value="<?php echo $row[6]; ?>">
                    </div>
                </div>
                
                <!-- Segunda fila -->
                <div class="cont_horiz">
                
                    <!-- Limite Diario -->
                        <div class="cont_vert">
                            <label for="">Limite Diario</label>
                            <input type="mail" name="Email" value="<?php echo $row[2] ?>">
                        </div>

                    <!-- Limite Mensual -->
                    <div class="cont_vert">
                        <label for="">Limite Mensual</label>
                        <input  type="text" name="RelRepreGremial" value="<?php echo $row[3] ?>">
                    </div>
                
                
                    <!-- Limite Anual -->
                    <div class="cont_vert"><label for="">Limite Anual</label>
                        <Input type="text" name="RelPuesto" value="<?php echo $row[4] ?>">

                    </div>
                </div>

                <!-- Tercera fila -->
                <div class="cont_horiz">
                

                    <!-- Descripcion -->
                    <div class="cont_vert w100">
                        <label for="">Descripción</label>
                        <textarea name="RelSubRegion" type="text"><?php echo $row[7]; ?></textarea>
                                
                    </div>    
                </div>

                <!-- Cuarta Fila -->
                <div class="cont_horiz">
                    <!-- Utilizacion -->
                    <div class="cont_vert w100">
                        <label for="">Utilizacion</label>
                        <textarea name="RelCoordinador" type="text"><?php echo $row[8]; ?></textarea>
                    </div> 
                </div>
                <!-- Quinta Fila -->
                <div class="cont_horiz">
                    <!-- Modo de Uso -->
                    <div class="cont_vert w100">
                        <label for="">Modo de Uso</label>
                        <textarea  name="RelCoordinacion" type="text"><?php echo $row[9]; ?></textarea>
                           
                       
                    </div>    
                            
                    
               </div>

        
        
        <div class="c3">
            <button type="submit" class="material-symbols-outlined bt_verde">check_circle</button>
            <a class="material-symbols-outlined bt_rojo" href="TiposNovedad.php">cancel</uttona>
        </div>
    </div>
    </div>
</body>

</html>

<?php

include "../conexion.php";

$CodMotivo = trim($_POST['CodMotivo']);
$NomMotivo = trim($_POST['NomMotivo']);

$con = conectar();

//$sql="UPDATE Motivos SET NomMotivo = '$NomMotivo' WHERE (CodMotivo='$CodMotivo')";

$query = mysqli_query($con, $sql);

if ($query) {
    Header("Location: motivos.php");
} else {
    echo ("Error : " . mysqli_error($con));
}

?>