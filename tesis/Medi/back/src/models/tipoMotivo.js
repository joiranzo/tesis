import mongoose from "mongoose";


const tipoMotivo = mongoose.Schema(({
    _id:{type:String, require:true , trim:true, index:true},
    descripcion:{type:String, require:true , trim:true, index:true}
}));



export default tipoMotivo