import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import authRouter from './routers/autho.routers.js'
import datoRouter from './routers/dato.routers.js'
import plataformaRouter from './routers/plataforma.routers.js'
import cors from 'cors'

const app=express()
app.use(cors())
app.use(morgan('dev'))              //para ver por consola las peticiones http
app.use(express.json())             //Para leer json
app.use(cookieParser())             //Para leer cookies
app.use(express.urlencoded({extended:false})) //Para leer los parametros
app.use('/api',authRouter)          //rutas de la aplicacion
app.use('/api',datoRouter)          //rutas de la aplicacion
app.use('/api',plataformaRouter)          //rutas de la aplicacion
export default app