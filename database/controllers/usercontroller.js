const user =require("../model/user")

const createClient =async(req,res)=>{
    try{
       const user = await User.create(req.body)
       //successfully
       res.status(200).json({message:"user created successfully",user})
    }catch(err){
       console.log(err);
       //server error
       res.status(500).json({error:"server error"})
    }
}
module.exports = {createClient}