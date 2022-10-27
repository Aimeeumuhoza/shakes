const express = require("express")
const {createClient,login,getClient,getAll,delet,update } = require("../controllers/userController")
const { verifyTokenAndAdmin,verifyTokenAndUser, verifyToken } = require("../middleware/verifyToken")

const userRoute = express()

userRoute.post("/create",createClient)
userRoute.post("/login",login)
userRoute.get("/get/:_id",getClient)
userRoute.get("/all",verifyTokenAndAdmin,getAll)
userRoute.delete("/delete/:_id",delet)
userRoute.patch("/update/:_id",verifyTokenAndUser,update)
module.exports = userRoute