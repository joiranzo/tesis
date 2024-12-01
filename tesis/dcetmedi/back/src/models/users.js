import mongoose from 'mongoose'

const usuarioSchema=new mongoose.Schema({
    nombre:{type:String , require:true , trim:true},
    apellido:{type:String , require:true , trim:true},
    email:{type:String , required:true , trim:true , unique:true , index:true},
    contrasena:{type:String,require:true,trim:true}
},{timestamps:true})

export default mongoose.model('usuario',usuarioSchema,'medi')