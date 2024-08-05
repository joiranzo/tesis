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
    <title>Tipos de Novedades por gremio</title>
</head>

<body>
    <div class="conte_gral">
        <div class="barra_menu">
            <div class="titulo">Tipos Novedades por Gremio</div>
            <div class="menu">
                <a class="material-symbols-outlined icon bt_azul" href="#" id="icon1">note_add</a>
                <a class="material-symbols-outlined icon bt_azul" href="">home</a>
            </div>
        </div>

        <div class="table">
            <div class="cont_horiz">

                <div class="cont_vert">
                    <label for="">Representación Gremial</label>
                    <select name="" id="">
                        <?php
                        foreach (consulta("ReprGremial", null) as $row) { ?>
                            <option value="<?php echo $row[0] ?>"><?php echo $row[1];
                        } ?></option>

                    </select>
                </div>

                <div class="cont_vert">
                    <label for="">Tipos de Novedades</label>
                    <div class="cont_vert">
                        <?php
                            foreach (consulta('TiposNovedades', null) as $row) {  ?>
                                <div>
                                <input type="checkbox" name="" id="">
                                    <label><?php echo $row[0] ?></label>
                                    <label><?php echo " - ",$row[1] ?></label>
                                    
                                </div>
                            <?php } ?>
                    </div>
                </div>
            </div>
        </div>




</body>
<script src="../../js/TiposNovedades.js"></script>

</html>