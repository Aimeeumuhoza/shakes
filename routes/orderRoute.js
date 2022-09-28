const express = require("express")
const {creatorder,getorder,delet,updatorder, getAllorder,updatestatus} = require("../controllers/ordercontroller")
const {verifyToken}  = require("../middleware/verifyToken")

const orderRoute = express()

orderRoute.post("/create", verifyToken ,creatorder)
orderRoute.get("/get/:_id",getorder)
orderRoute.get("/all",getAllorder)
orderRoute.delete("/delete/:_id",delet)
orderRoute.patch("/update/:_id",updatorder)
orderRoute.patch("/updateStatus/:_id",verifyToken,updatestatus)
module.exports = orderRoute