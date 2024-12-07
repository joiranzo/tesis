import mongoose from "mongoose";
import tipoLicencia from "./tipoLicencia.js";
import tipoGuardia from "./tipoGuardia.js";
import tipoNovedad from "./tipoNovedad.js";
import tipoRotacion from "./tipoRotacion.js";

const tipoEmpleado = mongoose.Schema(({
    _id:{type:String, require:true , trim:true},
    nombre:{type:String, require:true , trim:true},
    apellido:{type:String, require:true , trim:true},
    telefono:{type:String, require:true , trim:true},
    rotacion:{tipoRotacion},
    gremio:{type:String, require:true , trim:true},
    email:{type:String,trim:true},
    activo:{type:Boolean, require:true , trim:true},
    rol:{type:String, require:true , trim:true},
    numero:{type:String, require:true , trim:true},
    contrasena:{type:String, require:true , trim:true},
    novedades:[tipoNovedad],
    licencias:[tipoLicencia],
    guardia:[tipoGuardia]

}));



export default tipoEmpleado