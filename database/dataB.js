 const mongoose = require("mongoose")
 const dotenv = require("dotenv")
 dotenv.config()
 const dbURL   = process.env.MONGODB_URL
 

const dataB = async()=>{
    try {
     await mongoose.connect(dbURL, {useNewUrlParser: true}).then(()=>{
        console.log("database connected successfully")
     })
    } catch (error) {
        console.log(error)
    }
    
}

module.exports =dataB