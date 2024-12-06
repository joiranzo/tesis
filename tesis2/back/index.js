import app from './src/app.js'
import {connectDB} from './src/db.js'

async function init() {
    await app.listen(3000)
    console.log("Server funcionando en port 3000")
    await connectDB();
}

init();