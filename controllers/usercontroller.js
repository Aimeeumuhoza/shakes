const User =require("../model/user")
const bcrypt = require("bcrypt")
const {sign} = require("../helper/jwt")
const mailer = require("../helper/transport")

const createClient =async(req,res)=>{
   try{ 
      const salt = await bcrypt.genSalt(8)
      const hashpsw = await bcrypt.hash(req.body.password,salt)
      req.body.password = hashpsw

      // const isExist = await User.findOne({email:req.body.email})
      // if(isExist){
      //    return res.status(200).json({message:"email already exist try another one!"})
      // }
      const user = await User.create({
          name: req.body.name,
          email: req.body.email, 
          password: hashpsw
      })

       await mailer({email:user.email} ,"createAccount").catch((error)=>{
         console.log(error)
       })
      //successfully
      res.status(200).json({message:"user created successfully",user})
   }catch(err){
      console.log(err);
      //server error
      res.status(500).json(err.message)
   }
}
const loginClient= async(req,res)=>{
   try{
       const user = await User.findOne({email: req.body.email})
      
       if(user){
         const isMatch = await bcrypt.compare(req.body.password, user.password)
          if(isMatch){
            const token = await sign({id:user._id,email:user.email,password:user.password})
            
            return res.status(200).json({message:"user logged in successfully",token,user})
          }
       }
   }catch(err){
     console.log(err)
      return res.status(400).json({error:err})
   }
}
    const getClient = async (req,res)=>{
      try{ 
          const id=  req.params._id
          const user = await User.findById(id)
          // const user = await User.findAll()
          res.status(200).json({message:"user found",user})
      }catch(error){
        console.log(error);
      }
    }
      const delet=async(req,res)=>{
        try{
            const id= req.params._id
           
            const user=await User.findByIdAndDelete(id)
            res.status(200).json({message:"user deleted ",user})
        }catch(error){
           console.log(error)
        }
        }

const getAll = async(req,res)=>{
  try{
     const user =await User.find()
     res.status(200).json(user)
  }catch(err){
     console.log(err);
  }
}
const update= async(req,res)=>{
  try{
     const id=req.params._id
     const user=await User.findByIdAndUpdate(id,req.body)
     res.status(200).json({messsage:"user updated",user})
  }
  catch(error){
     console.log(error)
  }
}
module.exports = {createClient, loginClient,getClient,delet,getAll,update}




