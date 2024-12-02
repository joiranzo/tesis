import mongoose from "mongoose";


const tipoRol = mongoose.Schema(({
    _id:{type:String, require:true , trim:true, index:true}
    
}));



export default tipoRol