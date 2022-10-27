const  jwt = require("jsonwebtoken")
const  dotenv = require("dotenv")

<<<<<<< HEAD
const dotenv = require("dotenv")

dotenv.config() 

=======
dotenv.config()
>>>>>>> 888d57a3ee6117017b0164db77c3afbe86e591e0
const sign = (data)=> jwt.sign({data},process.env.SECRET_KEY,{expiresIn: '72h'})
const verify = (data) => jwt.verify(data, process.env.SECRET_KEY)

module.exports = {sign, verify}