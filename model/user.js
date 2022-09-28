const mongoose=require ("mongoose")
const validator=require("validator")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"name is required!"]
        
        
        
    },
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email must valid")
            }
        }

    },
    password:{
        type: String,
        minlength: [6,"password must have 6 character"]
    },
    
        
    })
    const User = mongoose.model("user",userSchema)
module.exports = User