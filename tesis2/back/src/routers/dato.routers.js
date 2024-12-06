import {Router} from 'express'
import { registrarGremio,obtenerGremio,borrarGremio,modificarGremio,registrarTipo,obtenerTipo,borrarTipo,modificarTipo} from '../controllers/gremio.Controller.js'
import { registrarMotivo,obtenerMotivo,borrarMotivo,modificarMotivo } from '../controllers/motivo.Controller.js'
import { registrarRol,obtenerRole,borrarRol,modificarRol } from '../controllers/rol.Controller.js'
import { registrarSectorOperativo,obtenerSectorOperativo,borrarSectorOperativo,modificarSectorOperativo } from '../controllers/sectorOperativo.Controller.js'
import { registrarSubRegion,obtenerSubRegion,borrarSubRegion,modificarSubRegion } from '../controllers/subRegion.Controller.js'
import { registrarTipoNovedad,obtenerTiposNovedades,borrarTipoNovedad,modificarTipoNovedad } from '../controllers/tipoNovedad.Controller.js'
import { borrarTipoLicencia, modificarTipoLicencia, obtenerTipoLicencia, registrarTipoLicencia } from '../controllers/tipoLicencia.Controller.js'
import { authRequiered } from '../middlewares/validateToken.js'

const router=Router()

//rutas de los roles
router.post('/roles',authRequiered, registrarRol)
router.get('/roles',authRequiered, obtenerRole)
router.delete('/roles',authRequiered, borrarRol)
router.put('/roles',authRequiered, modificarRol)

//Rutas de los tipos de novedad
router.post('/tiponovedad',authRequiered, registrarTipoNovedad)
router.get('/tiponovedad',authRequiered, obtenerTiposNovedades)
router.delete('/tiponovedad',authRequiered, borrarTipoNovedad)
router.put('/tiponovedad',authRequiered, modificarTipoNovedad)

//rutas de las subregiones
router.post('/subregion',authRequiered, registrarSubRegion)
router.get('/subregion',authRequiered, obtenerSubRegion)
router.delete('/subregion',authRequiered, borrarSubRegion)
router.put('/subregion',authRequiered, modificarSubRegion)

//rutas de los sectores operativos
router.post('/sectoroperativo',authRequiered, registrarSectorOperativo)
router.get('/sectoroperativo',authRequiered, obtenerSectorOperativo)
router.delete('/sectoroperativo',authRequiered, borrarSectorOperativo)
router.put('/sectoroperativo',authRequiered, modificarSectorOperativo)

//Rutas de los motivos
router.post('/Motivos',authRequiered, registrarMotivo)
router.get('/Motivos',authRequiered, obtenerMotivo)
router.delete('/Motivos',authRequiered, borrarMotivo)
router.put('/Motivos',authRequiered, modificarMotivo)

//rutas de los gremios
router.post('/gremios',authRequiered, registrarGremio)
router.get('/gremios',authRequiered, obtenerGremio)
router.delete('/gremios',authRequiered, borrarGremio)
router.put('/gremios',authRequiered, modificarGremio)

//rutas de los tipos de novedad de los gremios
router.post('/gremios/tipo',authRequiered, registrarTipo)
router.get('/gremios/tipo',authRequiered, obtenerTipo)
router.delete('/gremios/tipo',authRequiered, borrarTipo)
router.put('/gremios/modificartipo',authRequiered, modificarTipo)

//Rutas de los tipos de licenica
router.post('/Motivos',authRequiered, registrarTipoLicencia)
router.get('/Motivos',authRequiered, obtenerTipoLicencia)
router.delete('/Motivos',authRequiered, borrarTipoLicencia)
router.put('/Motivos',authRequiered, modificarTipoLicencia)

//Rutas de los encargados de tiempo

//Rutas de los feriados









export default router