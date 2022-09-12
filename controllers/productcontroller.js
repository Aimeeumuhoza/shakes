const  Product= require("../model/product")

const createproduct=async(req,res)=>{
    try{
      const product = await Product.create(req.body)
       //successfully500
       res.status(200).json({message:"product created successfully",product})
    }catch(err){
       console.log(err);
       //server error
       res.status(500).json(err.message)
    }
   }

const getproduct=async (req,res)=>{
    try{
        const id= req.params._id
        const product= await Product.findById(id)
      
      res.status(200).json({message:"product found",product})
    }
    catch(error){
        console.log(error);
        //server error
        
    }
}

const getAllproducts=async (req,res)=>{
    try{
        const products = await Product.find()
        return res.status(200).json({message:"product found",products})
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
const product=await Product.findByIdAndRemove(id)
res.status(200).json({message:"product deleted",product})
    }catch(error){
        console.log(error);
        //server error
        
    }
}
const updateproduct=async(req,res)=>{
    try{
   const id=req.params._id
   const product=await Product.findByIdAndUpdate(id,req.body)
   return res.status({message:"product created",product})
    }
    catch(error){
        console.log(error);
        //server error
        res.status(500).json(error.message)
    }
} 


module.exports ={createproduct,getproduct,delet,updateproduct,getAllproducts}