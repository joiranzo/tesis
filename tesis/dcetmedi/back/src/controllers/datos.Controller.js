import dato from'../models/datos.js'

export const registerRol=async (req,res) =>{
    
    const {nombre}=req.body
    try {
        const actualDato=await dato.findOne()
              
        if (!actualDato)  { const actualDato=new dato()}
            actualDato.roles.push(nombre)
            const savedDato=await actualDato.save()
        res.status(200).json({message:nombre})
       
    }
    catch (error){
        res.status(500).json({message: error.message})
    }
    
}