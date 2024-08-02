<?php
include "../conexion.php";
$legajo = $_POST['Legajo'];
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
    <title>Empleados</title>
</head>

<body>

    <div class="conte_gral">
        <div class="barra_menu">
            <h3>Empleados</h3>
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
                    <!-- Legajo -->
                    <div class="cont_vert">
                        <label for="">Legajo</label>
                        <input type="text" size="7" name="Legajo" readonly value="<?php echo $legajo ?>">
                    </div>
                    <!-- Realiza consulta sobre el empleado especificando el número de legajo -->
                   <?php
                    $tabla = 'Dotacion';
                    $filtro = "Legajo=$legajo";
                    foreach (consulta($tabla, $filtro) as $rowEmpleado) {?>
                        <!-- Nombre -->
                        <div class="cont_vert">
                            <label for="">Apellido y Nombre</label>
                            <input type="text" name="NomApe" value="<?php echo $rowEmpleado[1] ?>">
                        </div>
                        <!-- Mail -->
                        <div class="cont_vert">
                            <label for="">Mail</label>
                            <input type="mail" name="Email" value="<?php echo $rowEmpleado[2] ?>">
                        </div>
                        <!-- Gremio -->
                        <div class="cont_vert">
                            <label for="">Representación Gremial</label>
                            <select  type="text" name="RelRepreGremial" value="<?php echo $row[2] ?>">
                                <?php
                                    foreach (consulta('ReprGremial', null) as $row) { ?>
                                    <option value="<?php echo $row[0] ?>" <?php
                                       if ($row[0] == $rowEmpleado[3]) {echo "Selected";} else ?>> <?php echo $row[1]; ?>
                                    </option>
                                <?php } ?>
                            </select>
                        </div>
                </div>
                
                <!-- Segunda fila -->
                <div class="cont_hotiz">
                    <!-- Puesto -->
                    <div class="cont_vert"><label for="">Puesto:</label>
                        <select type="text" name="RelPuesto" value="<?php echo $row[2] ?>">
                            <?php
                            foreach (consulta('Puestos', null) as $row) { ?>
                                <option value="<?php echo $row[0] ?>" 
                                    <?php  if ($row[0] == $rowEmpleado[4]) { echo "Selected";} else ?>> <?php echo $row[1]; ?>
                                </option>
                            <?php } ?>
                        </select>
                    </div>
                </div>

                <!-- Tercera fila -->
                <div class="cont_horiz">
                    <!-- Superior Inmediato -->
                    <div class="cont_vert">
                        <label for="">Superior Inmediato:</label>
                        <select type="text" name="RelSupInmed" value="<?php echo $row[2] ?>">
                            <?php
                            foreach (consulta('SupInmeds', null) as $row) { ?>
                                <option value="<?php echo $row[0] ?>"
                                    <?php if ($row[0] == $rowEmpleado[5]) { echo "Selected"; } else ?>> <?php echo $row[1]; ?>
                                </option>
                            <?php } ?>
                        </select>
                    </div>
     
                <!-- Supervisiones -->
                    <div class="cont_vert">
                        <label for="">Supervisión</label>
                        <select name="RelSupervision" type="text">
                        <?php
                            foreach (consulta('Supervisiones', null) as $row) { ?>
                                <option value="<?php echo $row[0] ?>" 
                                <?php if ($row[0] == $rowEmpleado[6]) {echo "Selected";} else ?>><?php echo $row[1]; ?>
                                </option>
                                <?php } ?>
                        </select>
                    </div>

                    <!-- Subregiones -->
                    <div class="cont_vert">
                        <label for="">Subregión</label>
                        <select name="RelSubRegion" type="text">
                        <?php
                            foreach (consulta('Subregiones', null) as $row) { ?>
                                <option value="<?php echo $row[0] ?>" 
                                <?php if ($row[0] == $rowEmpleado[9]) {echo "Selected";} else ?>><?php echo $row[1]; ?>
                                </option>
                                <?php } ?>
                        </select>
                    </div>    
                </div>

                <!-- Cuarta Fila -->
                <div class="cont_horiz">
                    <!-- Coordinador -->
                    <div class="cont_vert">
                        <label for="">Coordinador:</label>
                        <select name="RelCoordinador" type="text">
                        <?php 
                            foreach (consulta('Coordinadores', null) as $row) { ?>
                            <option value="<?php echo $row[0] ?>" <?php
                                if ($row[0] == $rowEmpleado[7]) {echo "Selected";} else ?>><?php echo $row[1]; ?>
                            </option>
                        <?php } ?>
                        </select>
                    </div> 
                
                    <!-- Coordinacion -->
                    <div class="cont_vert">
                        <label for="">Coordinación:</label>
                        <select name="RelCoordinacion" type="text">
                            <?php
                           foreach (consulta('Coordinaciones', null) as $row) { ?>
                           <option value="<?php echo $row[0] ?>" <?php
                           if ($row[0] == $rowEmpleado[8]) {echo "Selected";} else ?>><?php echo $row[1]; ?>
                           </option>
                           <?php } ?>
                        </select>
                    </div>    
                            
                    <!-- Encargado de Tiempos-->
                    <div class="cont_vert">
                        <label for="">Encargado de tiempo:</label>
                        <select name="RelEncargTiempo" type="text"><?php
                            foreach (consulta('Encargados', null) as $row) { ?>
                                <option value="<?php echo $row[0] ?>" <?php
                                if ($row[0] == $rowEmpleado[10]) {echo "Selected";} else ?>><?php echo $row[1]; ?>
                                </option>
                                <?php } ?>
                        </select>
                    </div>
               </div>

        <?php } ?>
        
        <div class="c3">
            <button type="submit" class="material-symbols-outlined bt_verde">check_circle</button>
            <a class="material-symbols-outlined bt_rojo" href="dotacion.php">cancel</uttona>
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