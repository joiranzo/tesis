import mongoose from 'mongoose'
import tipoRol from '../models/tipoRol.js'
import tipoDeNovedad from '../models/tipoNovedad.js'
import tipoSubRegion from '../models/tipoSubregion.js'
import tipoSectorOperativo from '../models/tipoSectorOperativo.js'
import tipoMotivo from '../models/tipoMotivo.js'
import tipoGremio from '../models/tipoGremio.js'
import tipoDeLicencia from '../models/tipodeLicencia.js'
import tipoEstadoLicencia from '../models/tipoEstadoLicencia.js'
import tipoEncargado from '../models/tipoEncargado.js'
import tipoFeriado from '../models/tipoFeriados.js'
import tipoRotacion from '../models/tipoRotacion.js'

const datosSchema=new mongoose.Schema({
    roles:[tipoRol],
    tiposNovedades:[tipoDeNovedad],
	subRegiones:[tipoSubRegion],
    sectoresOperativos:[tipoSectorOperativo],
    motivos:[tipoMotivo],
    gremios:[tipoGremio],
    tiposDeLicencias:[tipoDeLicencia],
    estadosLicencias:[tipoEstadoLicencia],
    encargados:[tipoEncargado],
    feriados:[tipoFeriado],
    rotaciones:[tipoRotacion]
})

export default mongoose.model('dato',datosSchema,'datos')