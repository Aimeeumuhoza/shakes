const mongoose=require ("mongoose")
const validator=require("validator")

const orderSchema = new mongoose.Schema({
    userId :{
        type: mongoose.type.objectId
    },
    products:[{
        productId:{
            type: String
        },
        quantity:{
            type: String
        }
    }],
    amount:{
            type:String,
            required:true,
        },
    address:{
        type: String
    },
    amount:{
        type: String
    },
    status:{
        type: String
    }
       
    })
    const order = mongoose.model("orders",orderSchema)
module.exports = order