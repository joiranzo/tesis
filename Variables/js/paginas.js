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

function getCoordinadores(datosquery){
   
    let pag={
        titulo:"Coordinadores", //Titulo de la pagina
        barra:"Coordinadores", //Texto en la cabecera de la página
        datos:datosquery, //Datos de la consulta
        campos:{
            campo1:{//Siempre es clave primaria de la tabla
                visible:false,
                nombre:"IdCoordinador",
                etiqueta:"Código",
            },
            campo2:{
                nombre:"NomCoordinador",
                etiqueta:"Nombre del coordinador",
            }
        }
    }
   
    return pag
}

function getEncargados(datosquery){
   
    let pag={
        titulo:"Encagados", //Titulo de la pagina
        barra:"Encargados de Tiempo", //Texto en la cabecera de la página
        datos:datosquery, //Datos de la consulta
        campos:{
            campo1:{//Siempre es clave primaria de la tabla
                visible:false,
                nombre:"IdEncargado",
                etiqueta:"Código",
            },
            campo2:{
                nombre:"NomEncargado",
                etiqueta:"Nombre del encargado de tiempo",
            }
        }
    }
   
    return pag
}

function getEspecialidades(datosquery){
   
    let pag={
        titulo:"Especialidades", //Titulo de la pagina
        tabla:"Puestos",  //Nombre de la tabla 
        barra:"Especialidades de técnicos", //Texto en la cabecera de la página
        datos:datosquery, //Datos de la consulta
        campos:{
            campo1:{//Siempre es clave primaria de la tabla
                visible:false,
                nombre:"IdPuesto",
                etiqueta:"Código",
            },
            campo2:{
                nombre:"NomPuesto",
                etiqueta:"Nombre de la especialidad",
            }
        }
    }
   
    return pag
}

function getSuperiores(datosquery){
   
    let pag={
        titulo:"Superiores", //Titulo de la pagina
        tabla:"SupInmeds",  //Nombre de la tabla 
        barra:"Superiores Inmediatos", //Texto en la cabecera de la página
        datos:datosquery, //Datos de la consulta
        campos:{
            campo1:{//Siempre es clave primaria de la tabla
                visible:false,
                nombre:"IdSupInmed",
                etiqueta:"Código",
            },
            campo2:{
                nombre:"NomSupInmed",
                etiqueta:"Nombre del Superior",
            }
        }
    }
   
    return pag
}

function getGremios(datosquery){
   
    let pag={
        titulo:"Gremios", //Titulo de la pagina
        tabla:"ReprGremial",  //Nombre de la tabla 
        barra:"Representaciones Gremiales", //Texto en la cabecera de la página
        datos:datosquery, //Datos de la consulta
        campos:{
            campo1:{//Siempre es clave primaria de la tabla
                visible:false,
                nombre:"IdReprGremial",
                etiqueta:"Código",
            },
            campo2:{
                nombre:"NomReprGremial",
                etiqueta:"Nombre del Gremio",
            }
        }
    }
   
    return pag
}

function getSubregiones(datosquery){
   
    let pag={
        titulo:"Subregiones", //Titulo de la pagina
        tabla:"Subregion",  //Nombre de la tabla 
        barra:"Subregiones", //Texto en la cabecera de la página
        datos:datosquery, //Datos de la consulta
        campos:{
            campo1:{//Siempre es clave primaria de la tabla
                visible:false,
                nombre:"IdSubRegion",
                etiqueta:"Código",
            },
            campo2:{
                nombre:"NomSubRegion",
                etiqueta:"Nombre de la Subregión",
            }
        }
    }
   
    return pag
}

function getCoordinaciones(datosquery){
   
    let pag={
        titulo:"Coordinaciones", //Titulo de la pagina
        tabla:"Coordinaciones",  //Nombre de la tabla 
        barra:"Coordinaciones", //Texto en la cabecera de la página
        datos:datosquery, //Datos de la consulta
        campos:{
            campo1:{//Siempre es clave primaria de la tabla
                visible:false,
                nombre:"IdCoordinacion",
                etiqueta:"Código",
            },
            campo2:{
                nombre:"NomCoordinacion",
                etiqueta:"Nombre de la Coordinaicon",
            }
        }
    }
   
    return pag
}

function getPuestos(datosquery){
   
    let pag={
        titulo:"Especialidades", //Titulo de la pagina
        tabla:"Puestos",  //Nombre de la tabla 
        barra:"Especialidades de los Técnicos", //Texto en la cabecera de la página
        datos:datosquery, //Datos de la consulta
        campos:{
            campo1:{//Siempre es clave primaria de la tabla
                visible:false,
                nombre:"IdPuesto",
                etiqueta:"Código",
            },
            campo2:{
                nombre:"NomPuesto",
                etiqueta:"Nombre de la Especialidad",
            }
        }
    }
   
    return pag
}
function getEmpleados(conexion,datosquery){
    conexion.query("Select * from `Puestos`",(error,puestos)=>{
        if (error) {
            throw console.log(error)
        } else {    
            let pagina={
                puestos:puestos
        // empleados:datosquery,
        // puestos:conexion.query("Select * from "+getPuestos(null).tabla)
        // // empleados:Object.values(JSON.parse(JSON.stringify(datosquery)))
    }}
    console.log(pagina)
    return pagina
    
})}

module.exports={
    "motivo":getMotivos,
    "supervision":getSupervisiones,
    "coordinacion":getCoordinadores,
    "encargado":getEncargados,
    "especialidad":getEspecialidades,
    "superior":getSuperiores,
    "gremio":getGremios,
    "subregion":getSubregiones,
    "coordinacion":getCoordinaciones,
    "puesto":getPuestos,
    "empleado":getEmpleados
}