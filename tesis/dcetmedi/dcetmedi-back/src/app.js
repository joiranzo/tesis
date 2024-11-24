const express =require('express')
const app=express()
const rutas=require('./controladores/authControlador')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(rutas)

module.exports=app;