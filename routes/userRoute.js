const express = require("express")
const {createClient,loginClient,getClient,getAll,delet,update} = require("../controllers/userController")

const userRoute = express()

userRoute.post("/create",createClient)
userRoute.post("/login",loginClient)
userRoute.get("/get/:_id",getClient)
userRoute.get("/all",getAll)
userRoute.delete("/delete/:_id",delet)
userRoute.patch("/update/:_id",update)
module.exports = userRoute