const express = require("express")
const {createClient,loginClient,getClient,getAll,delet,update ,loginAdmin} = require("../controllers/userController")

const userRoute = express()

userRoute.post("/create",createClient)
userRoute.post("/login",loginClient)
userRoute.post("/admin/login",loginAdmin)
userRoute.get("/get/:_id",getClient)
userRoute.get("/all",getAll)
userRoute.delete("/delete/:_id",delet)
userRoute.patch("/update/:_id",update)
module.exports = userRoute