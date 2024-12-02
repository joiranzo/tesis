import {Router} from 'express'
import { registrarTipoNovedad,obtenerTiposNovedades,borrarTipoNovedad,modificarTipoNovedad } from '../controllers/tipoNovedad.Controller.js'
import { authRequiered } from '../middlewares/validateToken.js'

const router=Router()

//registra un nuevo rol
router.post('/tiponovedad',authRequiered, registrarTipoNovedad)

//devuelve todos los roles
router.get('/tiponovedad',authRequiered, obtenerTiposNovedades)

//borra un rol especificado en el parametro id
router.delete('/tiponovedad',authRequiered, borrarTipoNovedad)

router.put('/tiponovedad',authRequiered, modificarTipoNovedad)

export default router