const monedaE=require('../modelos/monedaModelo')

exports.crearMoneda=async (req,res)=>{
    try {
        let moneda

        moneda=new monedaE(req.body)
        await moneda.save()
        res.send(moneda)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}


exports.obtenerMonedas=async (req,res)=>{
    try {
        let monedas= await monedaE.find()
        res.json(monedas)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
exports.actualizarMoneda=async (req,res)=>{
    try {
        const {nombre, simbolo, precio, var24 , var7d}=req.body
     
        let moneda= await monedaE.findById(req.params.id)
        
        if (!moneda) {req.status(404).json({msg:"No existe esa moneda"})}
        
        moneda.nombre=nombre
        moneda.simbolo=simbolo
        moneda.precio=precio
        moneda.var24=var24
        moneda.var7d=var7d

        moneda=await monedaE.findOneAndUpdate({_id:req.params.id},moneda,{new:true})
        res.json(moneda)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerUnaMoneda=async (req,res)=>{
    try {
        let moneda= await monedaE.findById({_id:req.params.id})
        
        if (!moneda) {req.status(404).json({msg:"No existe esa moneda"})}
        
        res.json(moneda)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarUnaMoneda=async (req,res)=>{
    try {
        let moneda= await monedaE.findById({_id:req.params.id})
        if (!moneda) {req.status(404).json({msg:"No existe esa moneda"})}
        
        await monedaE.deleteOne({_id:req.params.id})
        
        res.json({msg:"Moneda Eliminada con Exito"})

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}
