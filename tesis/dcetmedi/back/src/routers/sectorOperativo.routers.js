import {Router} from 'express'
import { registrarSectorOperativo,obtenerSectorOperativo,borrarSectorOperativo,modificarSectorOperativo } from '../controllers/sectorOperativo.Controller.js'
import { authRequiered } from '../middlewares/validateToken.js'

const router=Router()

//registra un nuevo rol
router.post('/sectoroperativo',authRequiered, registrarSectorOperativo)

//devuelve todos los roles
router.get('/sectoroperativo',authRequiered, obtenerSectorOperativo)

//borra un rol especificado en el parametro id
router.delete('/sectoroperativo',authRequiered, borrarSectorOperativo)

router.put('/sectoroperativo',authRequiered, modificarSectorOperativo)

export default router