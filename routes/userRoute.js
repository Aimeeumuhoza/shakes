const express = require("express")
const {createClient,loginClient,getClient,getAll,delet,update } = require("../controllers/userController")
const { verifyTokenAndAdmin,verifyTokenAndUser, verifyToken } = require("../middleware/verifyToken")

const userRoute = express()

userRoute.post("/create",createClient)
userRoute.post("/login",loginClient)
userRoute.get("/get/:_id",getClient)
userRoute.get("/all",verifyTokenAndUser,getAll)
userRoute.delete("/delete/:_id",verifyTokenAndAdmin,delet)
userRoute.patch("/update/:_id",verifyTokenAndUser,update)
module.exports = userRoute