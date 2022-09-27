const mongoose=require ("mongoose")
const validator=require("validator")

const orderSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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
    status:{
        type: String,
        default:"pending"
    }
       
    })
    const order = mongoose.model("orders",orderSchema)
    module.exports = order
