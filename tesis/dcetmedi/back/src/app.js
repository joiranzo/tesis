import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import authRouter from './routers/autho.routers.js'
import datosRouter from './routers/datos.routers.js'

const app=express()

app.use(morgan('dev'))              //para ver por consola las peticiones http
app.use(express.json())             //Para leer json
app.use(cookieParser())             //Para leer cookies
app.use('/api',authRouter)          //rutas de la aplicacion
app.use('/api',datosRouter)          //rutas de la aplicacion
//const rutas=require('./controladores/authControlador')


//app.use(express.urlencoded({extended:false}))

//app.use(rutas)

export default app