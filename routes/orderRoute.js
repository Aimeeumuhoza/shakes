const express = require("express")
const {creatorder,getorder,delet,updatorder, getAllorder} = require("../controllers/ordercontroller")

const orderRoute = express()

orderRoute.post("/create",creatorder)
orderRoute.get("/get/:_id",getorder)
orderRoute.get("/all",getAllorder)
orderRoute.delete("/delete/:_id",delet)
orderRoute.patch("/update/:_id",updatorder)
module.exports = orderRoute