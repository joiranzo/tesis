<?php 
    include "../conexion.php"; 

    $con = conectar();
    
    if (mysqli_connect_errno()) {
        echo "Falló la conexión a MySQL: " . mysqli_connect_error();
        exit();
    } 
    
    $sql = "SELECT * FROM Motivos";
    
    $query = mysqli_query($con, $sql);
    
    $row=mysqli_fetch_array($query);
 
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
    <link rel="stylesheet" href="../../css/motivos.css">
    <link rel="stylesheet" href="../../css/comun.css">
    <title>Motivos</title>
</head>

<body>
    <div class="conte_gral">
        <div class="barra_menu">
            <div class="titulo">Motivos</div>
            <div class="menu">
                <a class="material-symbols-outlined icon" href="#" id="icon1">note_add</a>
                <a class="material-symbols-outlined icon" href="">home</a>
            </div>
        </div>
        
        <div class="table">
            
            <div class="titulos">
                <div class="c1">Código</div>
                <div class="c2">Descripción</div>
                <div class="c3"></div>
            </div>
            
            <div class="cuerpo">
                <form class="fila" action="nuevo.php" method="post" id="nuevo">
                    <input class="c1 borde_visible" type="text" name="inCodMotivo" size="6" >
                    <input class="c2 borde_visible" type="text" name="inNomMotivo"> 
                    <div class="c3">
                        <button type="submit" class="material-symbols-outlined grabar" >check_circle</button>    
                        <button type="reset" class="material-symbols-outlined cancelar" id="cancelar">cancel</button>
                    </div>    
                </form>
                <?php 
                    $query = mysqli_query($con, $sql);
                    while ($row = mysqli_fetch_array($query)) {?>
                    <form class="fila visible_flex" action="actualizar.php" method="post">
                        <input class="c1"  size="4" disabled name="CodMotivo" value="<?php echo $row['CodMotivo'] ?>">
                        <input class="c2 campo" disabled name="NomMotivo" value ="<?php echo $row['NomMotivo'] ?>"></input>
                        <div class="c3 ">
                            <button type="submit" class="material-symbols-outlined grabar">check_circle</button>    
                            <button type="reset" class="material-symbols-outlined cancelar">cancel</button>
                            <a class="material-symbols-outlined editar" href="#">Edit</a>
                            <a class="material-symbols-outlined borrar" href="borrar.php?id=
                                <?php echo $row['CodMotivo'] ?>
                                ">delete
                            </a>
                        </div>    
                    </form>
                <?php }?>
                
            </div>
        </div>

    </div>
</body>
<script src="../../js/motivos.js"></script>
</html>