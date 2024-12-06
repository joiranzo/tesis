import mongoose from "mongoose";


const tipoLicencia = mongoose.Schema(({
    _id:{type:String , require:true , trim:true},
    nombre:{type:String , require:true , trim:true},
    limiteAnual:{type:Number , require:true , trim:true},
    descripcion:{type:String , require:true , trim:true},
   }));



export default tipoLicencia
