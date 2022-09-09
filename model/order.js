const mongoose=require ("mongoose")
const validator=require("validator")

const orderSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"name is required!"],
    },
    Ingredients:{
        type:String,
        required:true,
       
        },
        time:{
            type:String,
            required:true,
        }
       
    })
    const order = mongoose.model("orders",orderSchema)
module.exports = order