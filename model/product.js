const mongoose=require ("mongoose")
const validator=require("validator")

const userSchema = new mongoose.Schema({
   frostyimg:{
    type:String,
    default:'avatar',
        
    },
    name:{
        type:String,
        required: [true,"name is required!"],
    },
    Ingredients:{
        type:String,
        required:true,
       
        },
        price:{
            type:String,
            required:true,
        }
       
    })
    const product = mongoose.model("products",userSchema)
module.exports = product