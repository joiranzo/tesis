function getMotivos(datosquery){
   
    let pagMotivo={
        titulo:"Motivos", //Titulo de la pagina
        barra:"Motivos de Variables", //Texto en la cabecera de la página
        datos:datosquery, //Datos de la consulta
        campos:{
            campo1:{//Siempre es clave primaria de la tabla
                visible:true,
                nombre:"CodMotivo",
                etiqueta:"Código",
            },
            campo2:{
                nombre:"NomMotivo",
                etiqueta:"Descripción",
            }
        }
    }
   
    return pagMotivo
}

function getSupervisiones(datosquery){
   
    let pag={
        titulo:"Supervisiones", //Titulo de la pagina
        barra:"Supervisiones", //Texto en la cabecera de la página
        datos:datosquery, //Datos de la consulta
        campos:{
            campo1:{//Siempre es clave primaria de la tabla
                visible:false,
                nombre:"IdSupervision",
                etiqueta:"Código",
            },
            campo2:{
                nombre:"NomSupervision",
                etiqueta:"Descripción",
            }
        }
    }
   
    return pag
}
module.exports={
    "motivo":getMotivos,
    "supervision":getSupervisiones
    
}