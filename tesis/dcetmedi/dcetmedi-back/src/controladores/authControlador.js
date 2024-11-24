const{Router}=require('express')
const rutas= Router()
const Usuario= require('../modelos/users')
const Token =require('jsonwebtoken')
const config=require('../config')

rutas.post('/registro', async (req,res,next)=>{
    const {nombre,apellido,email,contrasena}=req.body
    
    const nuevoUsuario= new Usuario({
        nombre,apellido,email,contrasena
    })
    
    nuevoUsuario.contrasena= await nuevoUsuario.encriptarContrasena(nuevoUsuario.contrasena)
    
    try {
        await nuevoUsuario.save()   
        const token=Token.sign({id: nuevoUsuario._id},config.secreto, {expiresIn:3600})   
        res.send({auth:true, token})
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

rutas.get('/usuario', async (req,res,next)=>{
    const token=req.headers['x-access-token']
    if (!token){
        return res.status(401).json({
            auth:false,
            message:"No token"
        })
    }

    try {
        const decodificado=Token.verify(token, config.secreto)    
        const usuario= await Usuario.findById(decodificado.id,{contrasena:0})
        res.send(usuario)
    } catch (error) {
        return res.status(401).send('Error Autenticacion')
    }
})

rutas.post('/ingreso', (req,res,next)=>{
    res.json('Usuario')
})
module.exports=rutas