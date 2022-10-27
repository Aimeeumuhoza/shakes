const  Order= require("../model/order");
const mailer= require("../helper/transport");
const User = require("../model/user");


const creatorder =async(req,res)=>{
    
    try{
        const id = req.user.data.id

      const order = await Order.create({
        userId:id,
        products:req.body.products,
        amount:req.body.amount,
        address:req.body.address,
        status: req.body.status
      })
      const user=await User.findById(id).select("email")

       //successfully500
       res.status(200).json({message:"order created successfully",order})
      await mailer({email:user},"createOrder" )
    }catch(err){
       console.log(err);
       //server error
       res.status(500).json(err.message)
    }
   }

const getorder=async (req,res)=>{
    try{
        //const id= req.params._id
        const id = await User.findById(order.userId)

        const order= await Order.findById(id)
      
      res.status(200).json({message:"got order",order})
    }
    catch(error){
        console.log(error);
        //server error
        
    }
    console.log(order);
}
const getclientorder=async (req,res)=>{
    try{
        
        const id = await Order.findById(id)

        const client= await User.findById(id)
      
      res.status(200).json({message:"got order",client})
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
//association 
const updatestatus=async(req,res)=>{
    try{
    const id = req.params._id 
    const {status} = req.body
    const order = await Order.findOne({id})

    // access userid from order model to find user email
    const user = await User.findById(order.userId).select('email')
    console.log(user);
    
    if(order){
    const order=await Order.findByIdAndUpdate(id,{status},{new:true})
    
    // const email = user.email
    await mailer({email:user},"updateOrder" )
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
module.exports ={creatorder,getorder,delet,updatorder,getAllorder,updatestatus,getclientorder}