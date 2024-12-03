import {Router} from 'express'
import { registrarMotivo,obtenerMotivo,borrarMotivo,modificarMotivo } from '../controllers/motivo.Controller.js'
import { authRequiered } from '../middlewares/validateToken.js'

const router=Router()

//registra un nuevo rol
router.post('/Motivos',authRequiered, registrarMotivo)

//devuelve todos los Motivos
router.get('/Motivos',authRequiered, obtenerMotivo)

//borra un rol especificado en el parametro id
router.delete('/Motivos',authRequiered, borrarMotivo)

router.put('/Motivos',authRequiered, modificarMotivo)

export default router