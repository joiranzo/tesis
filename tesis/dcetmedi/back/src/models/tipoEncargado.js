import mongoose from "mongoose";


const tipoEncargado = mongoose.Schema(({
    _id:{type:String, require:true , trim:true, index:true}
    
}));



export default tipoEncargado