import {Router} from 'express'
import { registrarRol,obtenerRoles,borrarRol,modificarRol } from '../controllers/rol.Controller.js'
import { authRequiered } from '../middlewares/validateToken.js'

const router=Router()

//registra un nuevo rol
router.post('/roles',authRequiered, registrarRol)

//devuelve todos los roles
router.get('/roles',authRequiered, obtenerRoles)

//borra un rol especificado en el parametro id
router.delete('/roles',authRequiered, borrarRol)

router.put('/roles',authRequiered, modificarRol)

export default router