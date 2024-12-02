import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import authRouter from './routers/autho.routers.js'
import rolRouter from './routers/rol.routers.js'
import tipoNovedadRouter from './routers/tipoNovedad.routers.js	'
import subRegionRouter from './routers/subRegion.routers.js'
import sectorOperativoRouter from './routers/sectorOperativo.routers.js' 

const app=express()

app.use(morgan('dev'))              //para ver por consola las peticiones http
app.use(express.json())             //Para leer json
app.use(cookieParser())             //Para leer cookies
app.use(express.urlencoded({extended:false})) //Para leer los parametros
app.use('/api',authRouter)          //rutas de la aplicacion
app.use('/api',rolRouter)          //rutas de la aplicacion
app.use('/api',tipoNovedadRouter)          //rutas de la aplicacion
app.use('/api',subRegionRouter)            //rutas de la aplicacion
app.use('/api',sectorOperativoRouter)            //rutas de la aplicacion
export default app