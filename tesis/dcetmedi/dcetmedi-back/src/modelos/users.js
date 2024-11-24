const {Schema, model}= require ('mongoose')
const bcrypt= require('bcryptjs')

const usuarioSchema=new Schema({
    nombre:String,
    apellido:String,
    email:{type:String,required:true,unique:true,index:true},
    legajo:Number,
    tecnico:String,
    contrasena:String
})

usuarioSchema.methods.encriptarContrasena= async (contrasena) =>{
    const salt= await bcrypt.genSalt(10);
    return bcrypt.hash(contrasena, salt);
};

module.exports=model('usuario',usuarioSchema,'usuarios')