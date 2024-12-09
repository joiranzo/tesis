import mongoose from "mongoose";
import tipoStream from "../models/tipoStream.js";
import tipoEmpleado from "../models/tipoEmpleado.js";


const plataformaSchema=new mongoose.Schema({
     nombre:{type:String, require:true , trim:true},
     po:{type:String, require:true , trim:true},
     streams:[tipoStream],
     empleadosLibres:[tipoEmpleado]
    });

// plataformaSchema.index({ nombre: 1, type: -1 })

export default mongoose.model('squemaPlataforma',plataformaSchema,'medi')