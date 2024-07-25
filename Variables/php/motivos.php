<a?php 

include("conexion.php");

$con=conectar();


$sql="SELECT * FROM Motivos";

$query=mysqli_query($con,$sql);

$row=mysqli_fetch_array($query);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/Variables/css/TablasAux.css">
    <title>Motivos</title>
</head>
<body>
  
        <form action="insert.php" >
            <h3>Nuevo Motivo</h3>
            <input type="text" class="" name="CodMotivo" id="" placeholder="Código del Motivo">
            <input type="text" class="" name="NomMotivo" id="" placeholder="Motivo">
            <button type="submit">Enviar</button>
        </form>
  
    
    <table>
        <thead>
            <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        <?php
                while($row=mysqli_fetch_array($query)){
            ?>
                <tr>
                    <td class="center"><?php echo $row['CodMotivo']?></td>
                    <td><?php echo $row['NomMotivo']?></td>
                    <!--<td class="center"><a>Editar</a></td>
                    <td class="center"><a>Borrar</a></td>-->
                </tr>
            <?php
                }
            ?> 
        </tbody>
    </table>
    
</body>
</html>