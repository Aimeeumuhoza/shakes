const User =require("../model/user")

const createClient =async(req,res)=>{
    try{
      const user = await User.create(req.body)
       //successfully500
       res.status(200).json({message:"user created successfully",user})
    }catch(err){
       console.log(err);
       //server error
       res.status(500).json(err.message)
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
            const id=req.params._id
            const user=await User.findByIdAndRemove(id)
            res.status(200).json({message:"user deleted "})
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
module.exports = {createClient, getClient,getAll,delet,update}