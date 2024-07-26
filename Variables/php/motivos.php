<?php

include ("conexion.php");

$con = conectar();


$sql = "SELECT * FROM Motivos";

$query = mysqli_query($con, $sql);

$row = mysqli_fetch_array($query);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/Variables/css/TablasAux.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <title>Motivos</title>
</head>

<body>
    <div class="contenedor">
        <!--<form action="insert.php" >
            <h3>Nuevo Motivo</h3>
            <input type="text" class="" name="CodMotivo" id="" placeholder="Código del Motivo">
            <input type="text" class="" name="NomMotivo" id="" placeholder="Motivo">
            <button type="submit">Enviar</button>
        </form>-->
        <div class="barra">
            <h3>Motivos</h3>
            <div class="menu c4">
                <a class="material-symbols-outlined" href="#" >add_box</a>
                <a class="material-symbols-outlined" href="http://" target="_blank" rel="noopener noreferrer">home</a>
            </div>
        </div>
        <div class="table">
            <div class="cabecera">
                <h3 class="c1">Código</h3>
                <h3 class="c2">Descripción</h3>
                <h3 class="c3"></h3>
                <h3 class="c4"></h3>
            </div>
            <div class="cuerpo">
                <?php
                while ($row = mysqli_fetch_array($query)) {
                    ?>
                    <div class="fila">
                        <h5 class="c1"><?php echo $row['CodMotivo'] ?></>
                            <h5 class="c2"><?php echo $row['NomMotivo'] ?></h5>
                            <a class="c3 material-symbols-outlined" href="http://" target="_blank" rel="noopener noreferrer">Edit</a>
                            <a class="c4 rojo material-symbols-outlined" href="http://" target="_blank" rel="noopener noreferrer">delete</a>
                    </div>
                    <?php
                }
                ?>
            </div>
        </div>
    </div>
</body>

</html>