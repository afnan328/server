const product=require('../Models/productmodel')

const Addproduct=async(req,res)=>{
    try {
        console.log(req.body)
               let {pname,pdesc,pprice,catid,pqty}=req.body;

               const UserImage=req.file? req.file.filename:null

               const newProduct = await product.create({
  product_name: pname,
  product_desc: pdesc,
  product_price: pprice,
  product_qty: pqty,
  product_image: UserImage,
  categoryId: catid,
});

res.json({ success: true, data: newProduct });


    } catch (error) {
         res.json({success:false, message:error.message})
        console.log(error)
    }
}

const Getproduct=async(req,res)=>{
  try {
    const getproducts=await product.find();  //fetch all user details
  console.log(getproducts)
  res.status(200).json({message:"all users details fetched!!",getproducts})

  } catch (error) {
    console.log(error)
  }
}

const Updateproduct=async(req,res)=>{
  try {
    const {pid}=req.params;
    const updateData={...req.body};
    if(req.file){
      updateData.product_image=req.file.filename;

    }

    const Updateproduct=await productschema.findByIdAndUpdate(pid,updateData,{new:true});
    if(!Updateproduct){
      res.status(404).json({message:"product not found"})
    }
    res.status(404).json({message:"product updated",Updateproduct})
  } catch (error) {
    console.log(error)
     res.status(500).json({message:"server error",error})
  }
}
module.exports={Addproduct,Getproduct,Updateproduct}