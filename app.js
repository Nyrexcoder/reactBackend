const express =  require('express')
const connectDB = require('./db/connection.js')
const web = require("./routes/web.js");

const app = express()
const port = process.env.PORT || '8015'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://neeraj2022:neeraj2022@ac-otpogzu-shard-00-00.eqrat64.mongodb.net:27017,ac-otpogzu-shard-00-01.eqrat64.mongodb.net:27017,ac-otpogzu-shard-00-02.eqrat64.mongodb.net:27017/nyrexdeveloper?ssl=true&replicaSet=atlas-5r3fb4-shard-0&authSource=admin&retryWrites=true&w=majority";
require('./models/contactModal')
const contact = require('./routes/contact')
connectDB(DATABASE_URL);

app.use(express.json())

app.use("/api",web)

app.use("/api",contact)


app.listen(port,()=>{
    console.log(`Server listenig at http:localhost:${port}`)
})