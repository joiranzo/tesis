import mongoose from "mongoose";
import tipoEmpleado from "../models/tipoEmpleado.js";



const plataformaSchema=new mongoose.Schema({
    nombre:{type:String, require:true },
    empleados:[tipoEmpleado],
    streams:[String]
    
    
})

export default mongoose.model('plataforma',plataformaSchema,'medi')