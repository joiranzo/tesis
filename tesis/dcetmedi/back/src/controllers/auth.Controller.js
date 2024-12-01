import User from'../models/users.js'
import bcrtypt from 'bcryptjs';
import {createAccessToken} from '../libs/jwt.js'

export const register=async (req,res) =>{
    
    const {nombre,apellido,email,contrasena}=req.body
    try {
        const contrsenaHash= await bcrtypt.hash(contrasena,10)

        const newUser=new User({
            nombre,apellido,email,
            contrasena:contrsenaHash
        })
        const savedUser=await newUser.save();
        const token=await createAccessToken({id:savedUser._id})
        res.cookie("token",token)
        res.json({
            nombre:userFound.nombre
        })
    
    }
    catch (error){
        res.status(500).json({message: error.message})
    }
    
}

export const login=async (req,res) =>{
    
    const {email,contrasena}=req.body
    try {
        const userFound= await User.findOne({email})

        if (!userFound) return res.status(400).json({message: "Error de logueo"})
        
        const isMatch= await bcrtypt.compare(contrasena,userFound.contrasena)

        if (!isMatch) return res.status(400).json({message: "Error de logueo"})
        
        const token=await createAccessToken({id:userFound._id})
        
        res.cookie("token",token)
        res.json({
            nombre:userFound.nombre
        })
    }
    catch (error){
        res.status(500).json({message: error.message})
    }
    
}

export const logout= (req,res) =>{
    res.cookie('token',"", { expire: new Date(0)})
    return res.sendStatus(200)
}

export const profile= (req,res) =>{
   console.log(req.user)
    return res.sendStatus(200)
}