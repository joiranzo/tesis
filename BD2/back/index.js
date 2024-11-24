const express= require('express')
const conectarDB=require('./config/db')
const app=express()


conectarDB()
app.use(express.json())

app.use('/api/monedas', require('./routes/monedas'))



app.listen(4000, () =>{ console.log("Servidor ok") } )