import mongoose from "mongoose";
import tipoEmpleado from "./tipoEmpleado.js";


const tipoStream = mongoose.Schema(({
    _id:{type:String, require:true , trim:true, index:true},
    lider:{type:String, require:true , trim:true},
    empleados:[tipoEmpleado]
}));



export default tipoStream