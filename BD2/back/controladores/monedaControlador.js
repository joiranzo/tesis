const Moneda=require('../modelos/monedaModelo')

exports.crearMoneda=async (req,res)=>{
    try {
        let moneda

        moneda=new Moneda(req.body)
        await moneda.save()
        res.send(moneda)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}


exports.obtenerMonedas=async (req,res)=>{
    try {
        let monedas= await moneda.find()
    
       
        res.send(moneda)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}