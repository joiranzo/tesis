import mongoose from "mongoose";


const tipoSectorOperativo = mongoose.Schema(({
    _id:{type:String, require:true , trim:true, index:true}
    
}));



export default tipoSectorOperativo