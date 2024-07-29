<?php 
    include "../conexion.php"; 

    $con = conectar();
    
    if (mysqli_connect_errno()) {
        echo "Falló la conexión a MySQL: " . mysqli_connect_error();
        exit();
    } 
    
    $sql = "SELECT * FROM Dotacion";
    
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
    <title>Empleados</title>
</head>

<body>
            
     <div class="conte">
        <div class="barra">
            <h3>Empleados</h3>
            <div>
                <a class="material-symbols-outlined" href="#" id="icon1">note_add</a>
                <a class="material-symbols-outlined" href="">home</a>
            </div>
        </div>
        
        <div class="table">
            
            <div class="cabecera">
                <h3 class="c1">Legajo</h3>
                <h3 class="c2">Apellido y Nombre</h3>
                <h3 class="c3"></h3>
            </div>
            
            <div class="cuerpo">
                <form class="form_visible" action="nuevo.php" method="post" id="nuevo">
                    <div class="horizontal">
                        <div class="vertical"><label for="">Legajo:</label><input class="borde_visible" type="text" ></div>
                        <div class="vertical"><label for="">Apellido y Nombre:</label><input class="borde_visible" type="text"> </div>
                    </div>    
                    <div class="horizontal">
                        <div class="vertical"><label for="">Puesto:</label><select class="borde_visible" type="text" ></select></div>
                        <div class="vertical"><label for="">Superior Inmediato:</label><select class="borde_visible" type="text"></select> </div>
                    </div>    
                    <div class="horizontal">
                        <div class="vertical"><label for="">Representación Gremial:</label><select class="borde_visible" type="text" ></select></div>
                        <div class="vertical"><label for="">Sub Región:</label><select class="borde_visible" type="text"></select> </div>
                    </div> 
                    <div class="horizontal">
                        <div class="vertical"><label for="">Coordinación:</label><select class="borde_visible" type="text" ></select></div>
                        <div class="vertical"><label for="">Supervisión:</label><select class="borde_visible" type="text"></select> </div>
                    </div> 
                    <div class="horizontal">
                        <div class="vertical"><label for="">Mail:</label><input class="borde_visible" type="text" ></div>
                        <div class="vertical"><label for="">Coordinador:</label><select class="borde_visible" type="text"></select> </div>
                    </div> 
                    <div class="horizontal">
                        <div class="vertical"><label for="">Encargado de tiempo:</label><select class="borde_visible" type="text" ></select></div>
                        <div class="vertical"><label for="">Libre:</label><select class="borde_visible" type="text"></select> </div>
                    </div> 
                    <div class="c3">
                        <button type="submit" class="material-symbols-outlined nuevo_grabar btn_visible">check_circle</button>    
                        <button type="reset" class="material-symbols-outlined nuevo_cancelar btn_visible" id="cancelar">cancel</button>
                    </div> 

                </form>
                <?php 
                    $query = mysqli_query($con, $sql);
                    while ($row = mysqli_fetch_array($query)) {?>
                        <div class="fila">
                            <input class="c1"  size="4" readonly name="Campo1" value="<?php echo $row['Legajo'] ?>">
                            <input class="c2 campo" disabled name="NomMotivo" value ="<?php echo $row['NomApe'] ?>"></input>
                            <div class="c3">
                                <button type="submit" class="material-symbols-outlined grabar">check_circle</button>    
                                <button type="reset" class="material-symbols-outlined cancelar">cancel</button>
                                <a class="material-symbols-outlined editar btn_visible" href="#">Edit</a>
                                <a class="material-symbols-outlined borrar btn_visible" href="borrar.php?id=
                                    <?php echo $row['CodMotivo'] ?>
                                    ">delete
                                </a>
                            </div>    
                        </div>
                <?php }?>
                
            </div>
        </div>

    </div>
</body>
<script src="motivos.js"></script>
</html>