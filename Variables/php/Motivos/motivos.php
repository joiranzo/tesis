<?php 
    include "../conexion.php"; 

    $con = conectar();
    
    $sql = "SELECT * FROM Motivos";
    
    $query = mysqli_query($con, $sql);
    
    $row=mysqli_fetch_array($query);
 
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="motivos.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <title>Motivos</title>
</head>

<body>
            
        <!--<div class="conte_form" id="conte_form">
            <form action="insert.php" id="Form" > 
                <div class="barra">
                    <h3>Nuevo Motivo</h3>
                    <a class="material-symbols-outlined" href="#" id="icon_cerrar">close</a>
                </div>
                <input type="text" class="" name="CodMotivo" id="" placeholder="Código del Motivo">
                <input type="text" class="" name="NomMotivo" id="" placeholder="Motivo">
                <button type="submit">Enviar</button>
            </form>
        </div>-->
    <div class="conte">
        <!--<div class="barra">
            <h3>Motivos</h3>
            <select class="buscador" id="sel_buscar">
                <?php 
                    
                /*while ($row = mysqli_fetch_array($query)) {?>
                     <option><?php echo $row['NomMotivo'] ?></option>
                <?php 
          }  */?>    
            </select>
            <div class="menu c4">
                <a class="material-symbols-outlined" id="icon_buscar" href="#">search</a>        
                <a class="material-symbols-outlined" href="#" id="icon_mas">add_box</a>
                <a class="material-symbols-outlined" href="http://" target="_blank" rel="noopener noreferrer">home</a>
            </div>
        </div>-->
        
        <div class="table">
            
            <div class="cabecera">
                <h3 class="c1">Código</h3>
                <h3 class="c2">Descripción</h3>
                <h3 class="c3"></h3>
            </div>
            
            <div class="cuerpo">
                <?php 
                    $query = mysqli_query($con, $sql);
                    while ($row = mysqli_fetch_array($query)) {?>
                    <form class="fila">
                        <label class="c1"> <?php echo $row['CodMotivo'] ?></label>
                        <input class="c2 input" disabled value ="<?php echo $row['NomMotivo'] ?>"></input>
                        <div class="c3">
                            <a class="material-symbols-outlined grabar" href="#">check_circle</a>    
                            <a class="material-symbols-outlined cancelar " href="#">cancel</a>
                            <a class="material-symbols-outlined editar btn_visible" href="#">Edit</a>
                            <a class="material-symbols-outlined borrar btn_visible" href="http://" target="_blank" rel="noopener noreferrer">delete</a>
                        </div>    
                    </form>
                <?php }?>
            </div>
        </div>

    </div>
</body>
<script src="motivos.js"></script>
</html>