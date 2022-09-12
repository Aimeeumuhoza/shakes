const mongoose=require ("mongoose")
const validator=require("validator")

const userSchema = new mongoose.Schema({
   frostying:{
    type:String,
    default:'avatar',
        
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