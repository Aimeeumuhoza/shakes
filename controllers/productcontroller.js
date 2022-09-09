const  product= require("../model/product")

const createproduct=async(req,res)=>{
    try{
        
        // const userid = req.user
        console.log(req.user.data._id)
        const task = await Task.create({ title:req.body.title,summary:req.body.summary, userId:'null' })
        return res.status(200).json({message:"order created",order})

    }catch(err){
        console.log(err)
        res.status(404).json(err)
    }
}

const getproduct=async (req,res)=>{
    try{
        const id= req.params._id
        const user= await Task.findById(id)
      
      res.status(200).json({message:"task found",user})
    }
    catch(error){
        console.log(error);
        //server error
        
    }
}

const getAllproducts=async (req,res)=>{
    try{
        const tasks = await task.find()
        return res.status(200).json({message:"task found",tasks})
    }
    catch(error){
        console.log(error);
        //server error
        res.status(500).json(error.message)
        
    }
}


const delet=async(req,res)=>{
    try{
const id=req.params._id
const User=await task.findByIdAndRemove(id)
res.status(200).json({message:"task deleted",User})
    }catch(error){
        console.log(error);
        //server error
        
    }
}
const updateproduct=async(req,res)=>{
    try{
   const id=req.params._id
   const user=await task.findByIdAndUpdate(id,req.body)
   return res.status({message:"product created",user})
    }
    catch(error){
        console.log(error);
        //server error
        res.status(500).json(error.message)
    }
} 


module.exports ={createproduct,getproduct,delet,updateproduct,getAllproducts}