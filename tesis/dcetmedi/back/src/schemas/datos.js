import mongoose from 'mongoose'
import tipoRol from '../models/tipoRol.js'
import tipoNovedad from '../models/tipoNovedad.js'
import tipoSubRegion from '../models/tipoSubregion.js'
import tipoSectorOperativo from '../models/tipoSectorOperativo.js'
import tipoMotivo from '../models/tipoMotivo.js'
import tipoGremio from '../models/tipoGremio.js'
import tipoLicencia from '../models/tipoLicencia.js'

const datosSchema=new mongoose.Schema({
    roles:[tipoRol],
    tiposNovedades:[tipoNovedad],
	subRegiones:[tipoSubRegion],
    sectoresOperativos:[tipoSectorOperativo],
    motivos:[tipoMotivo],
    gremios:[tipoGremio],
    tiposLicencias:[tipoLicencia]
    
},{timestamps:true})

export default mongoose.model('dato',datosSchema,'datos')