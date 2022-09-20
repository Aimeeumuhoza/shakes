const express = require("express")
const {createproduct,getproduct,delet,updateproduct, getAllproducts} = require("../controllers/productcontroller")
const upload = require("../helper/multer")

const productRoute = express()

productRoute.post("/create",upload.single("frostying") ,createproduct)
productRoute.get("/get/:_id",getproduct)
productRoute.get("/all",getAllproducts)
productRoute.delete("/delete/:_id",delet)
productRoute.patch("/update/:_id",updateproduct)
module.exports = productRoute