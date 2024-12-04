import {Router} from 'express'
import { registrarEmpleado,obtenerEmpleado,borrarEmpleado,modificarEmpleado } from '../controllers/empleado.Controller.js'
import { authRequiered } from '../middlewares/validateToken.js'

const router=Router()

//registra un nuevo rol
router.post('/empleados',authRequiered, registrarEmpleado)

//devuelve todos los gremios
router.get('/empleados',authRequiered, obtenerEmpleado)

//borra un rol especificado en el parametro id
router.delete('/empleados',authRequiered, borrarEmpleado)

router.put('/empleados',authRequiered, modificarEmpleado)

// router.post('/gremios/tipo',authRequiered, registrarTipo)

// //devuelve todos los gremios
// router.get('/gremios/tipo',authRequiered, obtenerTipo)

// //borra un rol especificado en el parametro id
// router.delete('/gremios/tipo',authRequiered, borrarTipo)

// router.put('/gremios/modificartipo',authRequiered, modificarTipo)
export default router