const mongoose=require('mongoose')

require('dotenv').config({path:'variables.env'})

const conectarDB= async () =>{

    try {
        await mongoose.connect(process.env.DB_MONGO)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
    console.log("Base Ok")
}

module.exports=conectarDB