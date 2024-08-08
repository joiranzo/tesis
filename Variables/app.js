const express=require("express")
const mysql=require("mysql")
const bodyParser = require('body-parser');

// const conexion=mysql.createConnection({
//     host:'localhost',
//     database:'NuevaVariables',
//     user:'root',
//     password:''
// })

const conexion=mysql.createConnection({
         host:'bvu4zofwdepeltug1eav-mysql.services.clever-cloud.com',
         database:'bvu4zofwdepeltug1eav',
         user:'um79iibw1rdmkdoc',
         password:'crQgdcAwWLRk4fH1hmPA'
     })

conexion.connect((error)=>{
    if (error) {throw error}
        else {console.log('Conectado a la base de datos')}
})
const app=express()

app.set("view engine","ejs")

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json())

app.post("/nuevodato",function(req,res){
    
    console.dir(req.body);
    res.send(req.body.id)
})

app.get("/reprgremiales",(req,res)=>{
    conexion.query('select * from ReprGremial',(error,resultados)=>{
        if (error) {
            throw error
        } else {
            res.render("reprgremiales",{resultado:resultados}) 
        }
        })
}) 

    app.get("/supervisiones",(req,res)=>{
        conexion.query('select * from Supervisiones',(error,resultados)=>{
            if (error) {
                throw error
            } else {
                res.render("supervisiones",{resultado:resultados}) 
            }
            })
       }) 
    
    app.get("/coordinadores",(req,res)=>{
        conexion.query('select * from Coordinadores',(error,resultados)=>{
            if (error) {
                throw error
            } else {
                res.render("coordinadores",{resultado:resultados}) 
            }
            })
       })
       
    app.get("/especialidades",(req,res)=>{
        conexion.query('select * from Puestos',(error,resultados)=>{
            if (error) {
                throw error
            } else {
                res.render("especialidades",{resultado:resultados}) 
            }
            })
       })
    
    app.get("/coordinaciones",(req,res)=>{
        conexion.query('select * from Coordinaciones',(error,resultados)=>{
            if (error) {
                throw error
            } else {
                res.render("coordinaciones",{resultado:resultados}) 
            }
            })
       })
    
    app.get("/encargados",(req,res)=>{
        conexion.query('select * from Encargados',(error,resultados)=>{
            if (error) {
                throw error
            } else {
                res.render("encargados",{resultado:resultados}) 
            }
            })
       })      
   
       app.get("/superior",(req,res)=>{
        conexion.query('select * from SupInmeds',(error,resultados)=>{
            if (error) {
                throw error
            } else {
                res.render("supinmeds",{resultado:resultados}) 
            }
            })
       })  

       app.get("/subregion",(req,res)=>{
        conexion.query('select * from Subregiones',(error,resultados)=>{
            if (error) {
                throw error
            } else {
                res.render("subregiones",{resultado:resultados}) 
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
        conexion.query('select * from Dotacion',(error,resultados)=>{
            if (error) {
                throw error
            } else {
                res.render("empleados",{resultado:resultados}) 
            }
            })
       }) 

       app.get("/empleadoedit",(req,res)=>{
            conexion.query("select * from Dotacion where Legajo="+req.query.id,(error,empleados)=>{
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

       app.get("/motivo",(req,res)=>{
        conexion.query('select * from Motivos',(error,resultados)=>{
            if (error) {
                throw error
            } else {
                res.render("motivos",{resultado:resultados}) 
            }
            })
       }) 
app.listen(3000, (req,res)=>{
    console.log("Corriendo en el puerto 3000")
})