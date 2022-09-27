const {verify} = require("../helper/jwt")

const verifyToken = (req,res,next)=>{
   const token =  req.headers.authorization
   const user = verify(token)
   if(!user){
     return res.status(400).json({message:"token is required"})
   }
   req.token =token
   req.user = user
  //  console.log(req.user.data._id)
   
  next()
}

module.exports = verifyToken