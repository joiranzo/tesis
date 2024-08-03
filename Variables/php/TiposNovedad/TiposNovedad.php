<?php
include "../conexion.php";

$con = conectar();

if (mysqli_connect_errno()) {
    echo "Falló la conexión a MySQL: " . mysqli_connect_error();
    exit();
}

$sql = "SELECT * FROM TiposNovedades";

$query = mysqli_query($con, $sql);

$row = mysqli_fetch_array($query);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
    <link rel="stylesheet" href="../../css/motivos.css">
    <link rel="stylesheet" href="../../css/comun.css">
    <title>Tipos de Novedades</title>
</head>

<body>
    <div class="conte_gral">
        <div class="barra_menu">
            <div class="titulo">Tipos Novedades</div>
            <div class="menu">
                <a class="material-symbols-outlined icon bt_azul" href="#" id="icon1">note_add</a>
                <a class="material-symbols-outlined icon bt_azul" href="">home</a>
            </div>
        </div>

        <div class="table">

            <div class="titulos">
                <div class="c1">Código</div>
                <div class="c2">Descripión </div>
                <div class="c3"></div>
            </div>

            <div class="cuerpo">
                <div id="seleccion">
                    <?php

                    $query = mysqli_query($con, $sql);
                    while ($row = mysqli_fetch_array($query)) { ?>
                        <form class="fila visible_flex" action="actualizar.php" method="post">
                            <input class="c1 campo" readonly name="IdTipoNovedad"
                                value="<?php echo $row['IdTipoNovedad'] ?>"></input>
                            <input class="c2 campo" disabled name="NomSupervision"
                                value="<?php echo $row['Nombre'] ?>"></input>
                            <div class="c3 ">
                                <button type="submit" class="material-symbols-outlined bt_azul">edit</button>
                                <a class="material-symbols-outlined bt_rojo borrar" href="borrar.php?id= -->
                                <?php echo $row['CodMotivo'] ?>
                                ">delete
                                </a>
                            </div>

                        </form>
                    <?php } ?>
                </div>
            </div>
        </div>

    </div>
</body>
<script src="../../js/TiposNovedades.js"></script>

</html>