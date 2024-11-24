const mongoose=require('mongoose')

const MonedaEsquema=mongoose.Schema({
    nombre:{type:String, required:true},
    simbolo:{type:String, required:true},
    precio:{type:Number, required:true},
    var24:{type:Number, required:true},
    var7d:{type:Number, required:true}
})

module.exports= mongoose.model('MonedaModelo',MonedaEsquema)