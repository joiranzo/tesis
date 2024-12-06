import mongoose from "mongoose";


const tipoFeriado = mongoose.Schema(({
    _id:{type:String, require:true , trim:true, index:true}
    
}));



export default tipoFeriado