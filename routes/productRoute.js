const express = require("express")
const {createproduct,getproduct,delet,updateproduct, getAllproducts} = require("../controllers/productcontroller")
const upload = require("../helper/multer")
const {isAdmin} =  require("../middleware/verifyToken")

const productRoute = express()

productRoute.post("/create",isAdmin,upload.single("frostying") ,createproduct)
productRoute.get("/get/:_id",getproduct)
productRoute.get("/all",getAllproducts)
productRoute.delete("/delete/:_id",isAdmin,delet)
productRoute.patch("/update/:_id",isAdmin,updateproduct)
module.exports = productRoute