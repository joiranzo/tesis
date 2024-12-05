import {Router} from 'express'
import { authRequiered } from '../middlewares/validateToken.js'
import { registrarPlataforma,obtenerPlataforma,modificarPlataforma,borrarPlataforma,
         registrarStream,obtenerStream,modificarStream,borrarStream
        } from '../controllers/plataforma.Controller.js'
const router=Router()
//Plataformas
router.post('/plataformas',authRequiered, registrarPlataforma)
router.get('/plataformas',authRequiered, obtenerPlataforma)
router.delete('/plataformas',authRequiered, borrarPlataforma)
router.put('/plataformas',authRequiered, modificarPlataforma)

//Streams
router.post('/streams',authRequiered, registrarStream)
router.get('/streams',authRequiered, obtenerStream)
router.delete('/streams',authRequiered, borrarStream)
router.put('/streams',authRequiered, modificarStream)

//Empleados

//Rotacion

//Novedades

//Licencias

//Guardias
export default router