import mongoose from 'mongoose'

const datosSchema=new mongoose.Schema({
    roles:[{type:String , require:true , trim:true}],
    gremios:[{nombre:{type:String , require:true , trim:true},
             codigos:[{type:Number}]}]
    
    
},{timestamps:true})

export default mongoose.model('dato',datosSchema,'datos')