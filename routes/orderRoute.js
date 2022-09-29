const express = require("express")
const {creatorder,getorder,delet,updatorder, getAllorder,updatestatus} = require("../controllers/ordercontroller")
const {verifyToken, isAdmin}  = require("../middleware/verifyToken")

const orderRoute = express()

orderRoute.post("/create", verifyToken ,creatorder)
orderRoute.get("/get/:_id",isAdmin,getorder)
orderRoute.get("/all",isAdmin,getAllorder)
orderRoute.delete("/delete/:_id",isAdmin,delet)
orderRoute.patch("/update/:_id",isAdmin,updatorder)
orderRoute.patch("/updateStatus/:_id",verifyToken,updatestatus)
module.exports = orderRoute