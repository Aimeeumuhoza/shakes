const express = require("express")
const {createproduct,getproduct,delet,updateproduct, getAllproducts} = require("../controllers/productcontroller")
const upload = require("../helper/multer")
const {verifyTokenAndAdmin} =  require("../middleware/verifyToken")

const productRoute = express()

productRoute.post("/create",verifyTokenAndAdmin,upload.single("frostying") ,createproduct)
productRoute.get("/get/:_id",getproduct)
productRoute.get("/all",getAllproducts)
productRoute.delete("/delete/:_id",verifyTokenAndAdmin,delet)
productRoute.patch("/update/:_id",verifyTokenAndAdmin,updateproduct)
module.exports = productRoute