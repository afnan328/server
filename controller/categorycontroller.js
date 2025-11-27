const Category=require('../Models/categorymodel')

const addCategory= async (req,res) => {
    try {
        console.log(req.body)
        let {cname, cdesc}=req.body;
        const addCategory = await Category.create({
           category_name: cname,
            category_desc:cdesc
        })
        const saveCategory = await addCategory.save()
        res.json({success:true, data:saveCategory})

    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

const GetCategory=async(req,res)=>{
  try {
    const getcategory=await Category.find();  //fetch all user details
  console.log(getcategory)
  res.status(200).json({message:"all users details fetched!!",getcategory})

  } catch (error) {
    console.log(error)
  }
}

const DeleteCategory=async(req,res)=>{
 try {
    const{cid}=req.params;
 const dcat=await Category.findByIdAndDelete(cid)  
 res.status(200).json({message:"category deleted",dcat}) 

 } catch (error) {
    console.log(error)
 }
}

// const GetcategoryById=async(req,res)=>{
//    try {
//      const {cid} = req.params //get id from url
//     const onecat=await Category.findById(cid);
//     if(!onecat){
//         return res.status(404).json({message:"category not found"})
//     }
//     res.status(200).json({message:"category found",onecat})

//     console.log(onecat)
//    } catch (error) {
//     res.status(500).json({message:"server error",error})
//     console.log(error)
//    }
// }
const GetcategoryById=async(req,res)=>{
    try {
         const {catid}=req.params;//to take id from request url
    const onecategory=await Category.findById(catid);//find the category model
        if(!onecategory){ //if no category found
            return(res.status(404).json({message:"category not found"}))
    } 
    res.status(200).json({message:"category found",onecategory})//if found send response
    console.log(onecategory)//print
}
catch (error) {
      res.status(500).json({message:"server error",error})  
    }
   
}

const updateCategory=async(req,res)=>{
    try {
        const{catid}=req.params; //holds the value of id
        const updatedcategory=await Category.findByIdAndUpdate(catid,req.body)
    
    //req.body it holds updated object(fields and values)
    res.status(200).json({message:"category updated successfully",updatedcategory})
    } catch (error) {
        res.status(500).json({message:"server error",error})
        console.log(error)
        
    }
}



module.exports ={addCategory,GetCategory,DeleteCategory,GetcategoryById,updateCategory}