import mongoose from "mongoose";

const tipoEmpleado = mongoose.Schema(({
    _id:{type:String, require:true , trim:true, index:true},
    nombre:{type:String, require:true , trim:true},
    apellido:{type:String, require:true , trim:true},
    telefono:{type:String, require:true , trim:true},
    rotacion:{type:Number},
    gremio:{type:String, require:true , trim:true},
    email:{type:String, require:true , trim:true},
    activo:{type:Boolean, require:true , trim:true},
    rol:{type:String, require:true , trim:true},
    numero:{type:String, require:true , trim:true},
    contrasena:{type:String, require:true , trim:true},
    stream:{type:String, require:true , trim:true}
}));



export default tipoEmpleado