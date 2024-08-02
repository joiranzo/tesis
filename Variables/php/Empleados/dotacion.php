<?php
include "../conexion.php";
/*
 $con = conectar();

if (mysqli_connect_errno()) {
    echo "Falló la conexión a MySQL: " . mysqli_connect_error();
    exit();
}

$sql = "SELECT * FROM Dotacion";

$query = mysqli_query($con, $sql);

*/

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
                <a class="material-symbols-outlined bt_azul" href="#" id="icon1">note_add</a>
                <a class="material-symbols-outlined bt_azul" href="">home</a>
            </div>
        </div>

        <div class="table">

            <div class="titulos">
                <div class="c1">Legajo</div>
                <div class="c2">Apellido y Nombre</div>
                <div class="c3"></div>
            </div>

            <div class="cuerpo">
                <div class="cont_horiz" id="seleccion">
                    <?php
                    /*$sql = "SELECT * FROM Dotacion";
                    $query = mysqli_query($con, $sql);*/
                    foreach (consulta("Dotacion",null) as $row) { ?>
                        <form class="fila visible_flex" action="actualizar.php" method="POST">
                            <input class="c1" size="4" readonly name="Legajo" value="<?php echo $row[0] ?>">
                            <input class="c2"          readonly name="Campo2" value="<?php echo $row[1] ?>">
                            <div class="c3">
                                <button type="submit" class="material-symbols-outlined bt_azul editar">Edit</button>
                                <a class="material-symbols-outlined bt_rojo borrar" href="borrar.php?id=<?php echo $row[0] ?>">delete</a>
                            </div>
                        </form>
                    <?php } ?>
                </div>
            </div>

        </div>

    </div>
</body>
<script src="../../js/dotacion.js"></script>

</html>