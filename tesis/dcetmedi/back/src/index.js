import app from './app.js'
import {connectDB} from './db.js'

//require('./database.js')

async function init() {
    await app.listen(3000)
    console.log("Server funcionando en port 3000")
    await connectDB();
}

init();