function generarInsert(body){
    let campos=" "
    let valores=" "
   
    let consulta="INSERT INTO `"+body.tabla+"`" 
    
    Object.entries(body).forEach(([key, value]) => {
        if (key!="fuente" && key!="tabla" && key.localeCompare("prikey")!=0) {  
            campos=campos+"`"+key+"`,"
            valores=valores+"'"+value+"',"        
        }
    });
    
    campos='('+campos.substring(1,campos.length-1)+")"
    valores='('+valores.substring(1,valores.length-1)+")"
    consulta=consulta+campos+" VALUES "+valores

    return consulta
}

function generarDelete(body){
 
    let consulta="DELETE FROM `"+body.tabla+"` WHERE `"+body.prikey+"`='"+body[body.prikey]+"'" 
   
    return consulta
}

function generarEdit(body){
    let campos=" "
    let valores=" "
  
    let consulta="UPDATE `"+body.tabla+"` SET " 
    
    Object.entries(body).forEach(([key, value]) => {
        if ((key!="fuente" && key!="tabla") && key.localeCompare("prikey")!=0) {  
            campos=campos+"`"+key+"`='"+value+"',"        
        }
        if (body.prikey.localeCompare(key)===0) {
            valores="`"+key+"`='"+value+"'"
            } 
    });
    
    campos=campos.substring(1,campos.length-1)
    consulta=consulta+campos+" WHERE "+valores
    
    return consulta
}

function generarGet(body){
    
    let consulta=""

    if (body.key==null)
    {consulta="SELECT * from "+body.tabla}
        else {consulta="SELECT * from "+body.tabla+" WHERE `"+body.key+"`='"+body.filtro+"'" }
   
    return consulta
}

module.exports={
    "Insert":generarInsert,
    "Delete":generarDelete,
    "Edit":generarEdit,
    "Get": generarGet

}