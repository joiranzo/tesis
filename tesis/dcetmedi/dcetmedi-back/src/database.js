
const mongoose= require('mongoose')

mongoose.connect('mongodb+srv://usuario:usuario@plantainterna.6jfbk.mongodb.net/?retryWrites=true&w=majority&appName=PlantaInterna')
    .then(db => console.log("Base de datos conectada"))