import mongoose from "mongoose";


const tipoEstadoLicencia = mongoose.Schema(({
    _id:{type:String, require:true , trim:true, index:true}
    
}));



export default tipoEstadoLicencia