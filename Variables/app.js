const express=require("express")
const mysql=require("mysql")
const bodyParser = require('body-parser');
const funciones=require("./js/funciones")
const paginas=require("./js/paginas")

const conexion=mysql.createConnection({
    host:'localhost',
    database:'NuevaVariables',
    user:'root',
    password:''
})

// const conexion=mysql.createConnection({
//          host:'bvu4zofwdepeltug1eav-mysql.services.clever-cloud.com',
//          database:'bvu4zofwdepeltug1eav',
//          user:'um79iibw1rdmkdoc',
//          password:'crQgdcAwWLRk4fH1hmPA'
//      })



conexion.connect((error)=>{
    if (error) {throw error}
        else {
            console.log('Conectado a la base de datos')

        }
})

const app=express()

app.set("view engine","ejs")

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json())


app.post("/nuevodato",function(req,res){
  conexion.query(funciones.Insert(req.body),(error,resultados)=>{
    if (error) {
        res.send(error)
    } else {
        res.redirect("/"+req.body.fuente)        
    }
    })
})

app.post("/borrardato",function(req,res){
    conexion.query(funciones.Delete(req.body),(error,resultados)=>{
      if (error) {
          res.send(error)
      } else {
          res.redirect("/"+req.body.fuente)        
      }
    })
})

app.post("/editardato",function(req,res){
conexion.query(funciones.Edit(req.body),(error,resultados)=>{
    if (error) {
        res.send(error)
    } else {
        res.redirect("/"+req.body.fuente)        
    }
    })
})  

app.post("/getdato",function(req,res){
    conexion.query(funciones.Get(req.body),(error,resultado)=>{
        if (error) {
            res.send(error)
        } else {
            res.send(resultado)        
        }
    })
})

app.get("/puestos",(req,res)=>{
    conexion.query('select * from Puestos',(error,datosquery)=>{
        if (error) {
            throw error
        } else {
            res.render("comun",{param:paginas.puesto(datosquery)}) 
        }
    })
}) 

app.get("/reprgremiales",(req,res)=>{
    conexion.query('select * from ReprGremial',(error,datosquery)=>{
        if (error) {
            throw error
        } else {
            res.render("comun",{param:paginas.gremio(datosquery)}) 
        }
        })
}) 

app.get("/supervisiones",(req,res)=>{
    conexion.query('select * from Supervisiones',(error,datosquery)=>{
        if (error) {
            throw error
        } else {
            res.render("comun",{param:paginas.supervision(datosquery)}) 
        }
        })
    }) 
    
app.get("/coordinadores",(req,res)=>{
    conexion.query('select * from Coordinadores',(error,datosquery)=>{
        if (error) {
            throw error
        } else {
            res.render("comun",{param:paginas.coordinacion(datosquery)}) 
        }
    })
})
       
app.get("/especialidades",(req,res)=>{
        conexion.query('select * from Puestos',(error,datosquery)=>{
            if (error) {
                throw error
            } else {
                res.render("comun",{param:paginas.especialidad(datosquery)}) 
            }
            })
    })
    
app.get("/coordinaciones",(req,res)=>{
        conexion.query('select * from Coordinaciones',(error,datosquery)=>{
            if (error) {
                throw error
            } else {
                res.render("comun",{param:paginas.coordinacion(datosquery)}) 
            }
            })
    })
    
app.get("/encargados",(req,res)=>{
        conexion.query('select * from Encargados',(error,datosquery)=>{
            if (error) {
                throw error
            } else {
                res.render("comun",{param:paginas.encargado(datosquery)}) 
            }
            })
    })      
   
app.get("/superior",(req,res)=>{
    conexion.query('select * from SupInmeds',(error,datosquery)=>{
        if (error) {
            throw error
        } else {
            res.render("comun",{param:paginas.superior(datosquery)}) 
        }
        })
    })  

app.get("/subregiones",(req,res)=>{
        conexion.query('select * from Subregiones',(error,datosquery)=>{
            if (error) {
                throw error
            } else {
                res.render("comun",{param:paginas.subregion(datosquery)})  
            }
            })
    }) 

app.get("/tiponovedad",(req,res)=>{
    conexion.query('select * from TiposNovedades',(error,resultados)=>{
        if (error) {
            throw error
        } else {
            res.render("tiposnovedades",{resultado:resultados}) 
        }
        })
    }) 

app.get("/tiponovedadedit",(req,res)=>{
    conexion.query("select * from TiposNovedades where IdTipoNovedad='"+req.query.id+"'",(error,resultados)=>{
        if (error) {
            throw error
        } else {
            res.render("tiposnovedades_edit",{resultado:resultados}) 
        }
        })
    }) 

app.get("/empleado",(req,res)=>{
conexion.query('select * from Dotacion',(error,datosquery)=>{
    if (error) {
        throw error
    } else {
        console.log(paginas.empleado(conexion,datosquery).puestos)
       res.send(paginas.empleado(conexion,datosquery).puestos)
        //res.render("empleados",{param:paginas.empleado(conexion,datosquery)})
    }
    })
}) 

app.get("/empleadoedit",(req,res)=>{
    conexion.query("select * from Dotacion",(error,empleados)=>{
    if (error) { throw error} else {conexion.query("select * from Puestos",(error,puestos)=>{
        if (error) { throw error} else {conexion.query("select * from SupInmeds",(error,supinmeds)=>{
        if (error) { throw error} else {conexion.query("select * from Coordinaciones",(error,coordinaciones)=>{
        if (error) { throw error} else {conexion.query("select * from Coordinadores",(error,coordinadores)=>{
        if (error) { throw error} else {conexion.query("select * from Encargados",(error,encargados)=>{
            if (error) { throw error} else {conexion.query("select * from ReprGremial",(error,gremios)=>{
            if (error) { throw error} else {conexion.query("select * from Subregiones",(error,subregiones)=>{
            if (error) { throw error} else {conexion.query("select * from Supervisiones",(error,supervisiones)=>{
                if (error) { throw error} else     
        {res.render("empleados_edit",{empleados,puestos,supinmeds,coordinaciones,coordinadores,encargados,
        gremios,subregiones,supervisiones})}
    
})}})}})}})}})}})}})}})}})})

app.get("/motivos",(req,res)=>{
            let query='select * from Motivos'    
            conexion.query(query,(error,datosquery)=>{
                if (error) {res.send(error)}
                    else{res.render("comun",{param:paginas.motivo(datosquery)} )
                }
           })            
    }) 

app.listen(3000, (req,res)=>{
    console.log("Corriendo en el puerto 3000")
})