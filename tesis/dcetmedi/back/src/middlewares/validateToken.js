import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'

export const authRequiered = (req,res,next)=>{
    next() //Borrar esta linea para normalizar
    // const {token} =req.cookies

    // if (!token) return res.status(401).json({message:"No autorizado"})

    //     jwt.verify(token,TOKEN_SECRET, (err,user)=>{
    //         if (err) return res.status(403).json({message:"No autorizado, token invalido"})
            
    //             req.user=user

    //             next()
                
    //     })


}