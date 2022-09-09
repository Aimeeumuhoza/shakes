const express = require('express')
const dataB = require('./database/dataB')
const userRoute = require("./routes/userRoute")
const orderRoute = require("./routes/orderRoute")
const productRoute = require("./routes/productRoute")
const app=express()
app.use(express.json())
app.use("/user",userRoute)
app.use("/order",orderRoute)
app.use("/product",productRoute)
/*app.get("/users",(req,res)=>{
    res.send("connected")
});*/

const port =  8000;
dataB()
app.listen(port,()=>{

    
    console.log("server is connected")
})