const express=require("express")
const app=express()
var cors=require("cors")
const mongoose=require("mongoose")
const bodyparser = require("body-parser")
const {config}=require("dotenv")
const routes=require("./route/adminRoute")
const path=require("path")

require("dotenv"),config()
const port=process.env.PORT||5000

mongoose.connect(process.env.DBCONNECT).then(()=>{
    console.log("db connected")

})

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.use("/admin",routes)

app.listen(port,()=>{
    console.log("server started")
})