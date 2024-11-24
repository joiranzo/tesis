const express=require('express')
const router=express.Router()
const monedaControler=require('../controladores/monedaControlador')

router.post('/',monedaControler.crearMoneda)
router.get('/',)

module.exports=router