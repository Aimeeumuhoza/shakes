const express = require("express")
const {createproduct,getproduct,delet,updateproduct, getAllproducts} = require("../controllers/productcontroller")

const productRoute = express()

productRoute.post("/create",createproduct)
productRoute.get("/get/:_id",getproduct)
productRoute.get("/all",getAllproducts)
productRoute.delete("/delete/:_id",delet)
productRoute.patch("/update/:_id",updateproduct)
module.exports = productRoute