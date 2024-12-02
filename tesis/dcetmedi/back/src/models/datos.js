import mongoose from 'mongoose'
import tipoRol from './tipoRol.js'
import tipoNovedad from './tipoNovedad.js'
import tipoSubRegion from './tipoSubregion.js'
import tipoSectorOperativo from './tipoSectorOperativo.js'


const datosSchema=new mongoose.Schema({
    roles:[tipoRol],
    tiposNovedades:[tipoNovedad],
	subRegiones:[tipoSubRegion],
    sectoresOperativos:[tipoSectorOperativo],
    gremios:[{nombre:{type:String , require:true , trim:true},
             codigos:[{type:Number}]}]
    
    
},{timestamps:true})

export default mongoose.model('dato',datosSchema,'datos')