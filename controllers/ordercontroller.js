const  Order= require("../model/order")

const creatorder =async(req,res)=>{
    try{
      const user = await Order.create(req.body)
       //successfully500
       res.status(200).json({message:"order created successfully",user})
    }catch(err){
       console.log(err);
       //server error
       res.status(500).json(err.message)
    }
   }

const getorder=async (req,res)=>{
    try{
        const id= req.params._id
        const user= await Order.findById(id)
      
      res.status(200).json({message:"got order",user})
    }
    catch(error){
        console.log(error);
        //server error
        
    }
}

const getAllorder=async (req,res)=>{
    try{
        const orders = await Order.find()
        return res.status(200).json({message:"got all orders",orders})
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
const order=await Order.findByIdAndRemove(id)
res.status(200).json({message:"order deleted"})
    }catch(error){
        console.log(error);
        //server error
        
    }
}
const updatorder=async(req,res)=>{
    try{
   const id=req.params._id
   const order=await Order.findByIdAndUpdate(id,req.body)
   return res.status({message:"updated",order})
    }
    catch(error){
        console.log(error);
        //server error
        res.status(500).json(error.message)
    }
} 


module.exports ={creatorder,getorder,delet,updatorder,getAllorder}