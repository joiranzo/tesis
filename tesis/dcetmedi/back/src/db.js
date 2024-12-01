
import mongoose from 'mongoose'

export const connectDB= async ()=> {
    try {
        mongoose.connect('mongodb+srv://usuario:usuario@PlantaInterna.6jfbk.mongodb.net/ETyDC?retryWrites=true&w=majority&appName=PlantaInterna')
       .then(db => console.log("Base de datos conectada"))
    } catch (error) {
        console.log(error)
    }
}    