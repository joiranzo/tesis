import mongoose from "mongoose";


const tipoNovedad = mongoose.Schema(({
    _id:{type:String , require:true , trim:true},
    nombre:{type:String , require:true , trim:true},
    limiteDiario:{type:Number , require:true , trim:true},
    limiteMensual:{type:Number , require:true , trim:true},
    limiteAnual:{type:Number , require:true , trim:true},
    rango:{type:Boolean , require:true , trim:true},
    motivo:{type:Boolean , require:true , trim:true},
    descripcion:{type:String , require:true , trim:true},
    utilizacion:{type:String , require:true , trim:true},
    uso:{type:String , require:true , trim:true}
}));



export default tipoNovedad