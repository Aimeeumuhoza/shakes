const express = require("express")
const {creatorder,getorder,delet,updatorder, getAllorder,updatestatus} = require("../controllers/ordercontroller")
const {verifyToken, verifyTokenAndAdmin}  = require("../middleware/verifyToken")

const orderRoute = express()

orderRoute.post("/create", verifyToken ,creatorder)
orderRoute.get("/get/:_id",verifyTokenAndAdmin,getorder)
orderRoute.get("/all",verifyTokenAndAdmin,getAllorder)
orderRoute.delete("/delete/:_id",verifyTokenAndAdmin,delet)
orderRoute.patch("/update/:_id",verifyTokenAndAdmin,updatorder)
orderRoute.patch("/updateStatus/:_id",verifyToken,updatestatus)
module.exports = orderRoute