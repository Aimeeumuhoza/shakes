const  Order= require("../model/order")
const mailer= require("../helper/transport")

const creatorder =async(req,res)=>{
    
    try{
        const id = req.user.data._id
       
      const user = await Order.create({
        userId:id,
        products:req.body.products,
        amount:req.body.amount,
        address:req.body.address,
        status: req.body.status
      })
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
const updatestatus=async(req,res)=>{
    try{
    const id = req.params._id 
    const email = req.user.data.email
    const {status} = req.body
    const order = await Order.findOne({id})
    

    if(order){
    const order=await Order.findByIdAndUpdate(id,{status},{new:true})
    
    await mailer(email,"createOrder")
    return res.status(200).json({message:`order ${status} successfully`,order})

    }
    else{
        return res.status(400).json({message:"there is no order"})  
    }
}
catch(error){
    console.log(error);
    //server error
    res.status(500).json(error.message)
}
}
module.exports ={creatorder,getorder,delet,updatorder,getAllorder,updatestatus}