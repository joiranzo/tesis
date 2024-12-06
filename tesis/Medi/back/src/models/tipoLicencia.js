import mongoose from "mongoose";


const tipoDeLicencia = mongoose.Schema(({
    _id:{type:String , require:true , trim:true},
    tipo:{type:String , require:true , trim:true},
    fechaInicio:{type:String , require:true , trim:true},
    duracion:{type:Number , require:true , trim:true},
    estados:{type:String , require:true , trim:true}
}));



export default tipoDeLicencia
