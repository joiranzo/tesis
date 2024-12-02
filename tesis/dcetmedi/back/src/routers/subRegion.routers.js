import {Router} from 'express'
import { registrarSubRegion,obtenerSubRegion,borrarSubRegion,modificarSubRegion } from '../controllers/subRegion.Controller.js'
import { authRequiered } from '../middlewares/validateToken.js'

const router=Router()

//registra un nuevo rol
router.post('/subregion',authRequiered, registrarSubRegion)

//devuelve todos los roles
router.get('/subregion',authRequiered, obtenerSubRegion)

//borra un rol especificado en el parametro id
router.delete('/subregion',authRequiered, borrarSubRegion)

router.put('/subregion',authRequiered, modificarSubRegion)

export default router