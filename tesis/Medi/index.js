import app from './back/src/app.js'
import {connectDB} from './back/src/db.js'

//require('./database.js')

async function init() {
    await app.listen(3000)
    console.log("Server funcionando en port 3000")
    await connectDB();
}

init();