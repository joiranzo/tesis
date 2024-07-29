<?php 
    include "../conexion.php"; 

    $con = conectar();
    
    if (mysqli_connect_errno()) {
        echo "Falló la conexión a MySQL: " . mysqli_connect_error();
        exit();
    } 
    
    $sql = "SELECT * FROM Coordinaciones";
    
    $query = mysqli_query($con, $sql);
    
    $row=mysqli_fetch_array($query);
 
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/estilos.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <title>Coordinaciones</title>
</head>

<body>
            
     <div class="conte">
        <div class="barra">
            <h3>Coordinaciones</h3>
            <div>
                <a class="material-symbols-outlined" href="#" id="icon1">note_add</a>
                <a class="material-symbols-outlined" href="">home</a>
            </div>
        </div>
        
        <div class="table">
            
            <div class="cabecera">
                <!--<h3 class="c1">Código</h3>-->
                <h3 class="c2">Descripción</h3>
                <h3 class="c3"></h3>
            </div>
            
            <div class="cuerpo">
                <form class="nuevo" action="nuevo.php" method="post" id="nuevo">
                    <input class="c1 borde_visible" type="text" name="inCodMotivo" size="6" >
                    <input class="c2 borde_visible" type="text" name="inNomMotivo"> 
                    <div class="c3">
                        <button type="submit" class="material-symbols-outlined nuevo_grabar btn_visible">check_circle</button>    
                        <button type="reset" class="material-symbols-outlined nuevo_cancelar btn_visible" id="cancelar">cancel</button>
                    </div>    
                </form>
                <?php 
                    $query = mysqli_query($con, $sql);
                    while ($row = mysqli_fetch_array($query)) {?>
                    <form class="fila form_visible" action="actualizar.php" method="post">
                        <!--<input class="c1"  size="4" readonly name="CodMotivo" value="<?php echo $row['CodMotivo'] ?>">-->
                        <input class="c2 campo" disabled name="NomMotivo" value ="<?php echo $row['NomCoordinacion'] ?>"></input>
                        <div class="c3">
                            <button type="submit" class="material-symbols-outlined grabar">check_circle</button>    
                            <button type="reset" class="material-symbols-outlined cancelar">cancel</button>
                            <a class="material-symbols-outlined editar btn_visible" href="#">Edit</a>
                            <a class="material-symbols-outlined borrar btn_visible" href="borrar.php?id=
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
<script src="motivos.js"></script>
</html>