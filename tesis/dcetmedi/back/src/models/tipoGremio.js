import mongoose from "mongoose";


const tipoGremio = mongoose.Schema(({
    _id:{type:String, require:true , trim:true, index:true},
    tipos:[String]
}));



export default tipoGremio