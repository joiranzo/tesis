const express=require('express')
const router=express.Router()
const monedaControler=require('../controladores/monedaControlador')

router.post('/',monedaControler.crearMoneda)
router.get('/',monedaControler.obtenerMonedas)
router.put('/:id',monedaControler.actualizarMoneda)
router.get('/:id',monedaControler.obtenerUnaMoneda)
router.delete('/:id',monedaControler.eliminarUnaMoneda)
module.exports=router