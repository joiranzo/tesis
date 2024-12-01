import {Router} from 'express'
import { registerRol } from '../controllers/datos.Controller.js'
import { authRequiered } from '../middlewares/validateToken.js'

const router=Router()

router.get('/roles',authRequiered, registerRol)

export default router