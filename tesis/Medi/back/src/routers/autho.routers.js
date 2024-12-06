import {Router} from 'express'
import { login,registrar,logout } from '../controllers/auth.Controller.js'

const router=Router()

router.post('/registrar',registrar)

router.post('/login',login)

router.post('/logout',logout)

export default router
