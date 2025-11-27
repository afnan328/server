const bcryptjs=require('bcryptjs')

const userschema=require('../Models/usermodel')
const jwt=require('jsonwebtoken')// to verify or generate  token
const SECRET_KEY="mernstack"

const Adduser=async(req,res)=>{
    try {
        const{uname,uemail,upassword,uphone,uaddress}=req.body
          const hashpassword=await bcryptjs.hash(upassword,10)     
        const userdata=new userschema({name:uname,
                                      email:uemail,
                                      password:hashpassword, 
                                      phone:uphone,
                                      address:uaddress})

                               
        await userdata.save()
        res.status(201).json({message:"user created",userdata})
        // console.log('user added')
        
    } catch (error) {
      res.status(500).json({message:"server error",error})
        console.log(error)
        
    }
}

const Getuser=async(req,res)=>{
  try {
    const getusers=await userschema.find();  //fetch all user details
  console.log(getusers)
  res.status(200).json({message:"all users details fetched!!",getusers})

  } catch (error) {
    console.log(error)
  }
}

const GetUserById=async(req,res)=>{
    try {
       const {uid}=req.params; //get id from url
       const oneuser=await userschema.findById(uid);
       if(!oneuser){
        return res.status(404).json({message:"user not found"})
       }
       res.status(200).json({message:"user found",oneuser})
       console.log(oneuser)

    } catch (error) {
        console.log(error)
    }
}

const DeleteUser=async(req,res)=>{
    try {
        const{mid}=req.params;
        const duser=await userschema.findByIdAndDelete(mid);
        res.status(200).json({message:"user deleted successfully",duser})
        
    } catch (error) {
        console.log(error)
    }
}

const Login=async(req,res)=>{
  try {
    const {uemail,upassword}=req.body;
    const matcheduser=await userschema.findOne({
      //model name:front end name 
      email:uemail,
      
  })

  const checkpass=await bcryptjs.compare(upassword,matcheduser.password);
  if(!checkpass){
    return res.json({success:false,message:"Invalid credentials!"})
  }
  
  if(!matcheduser){
    res.json({success:false,message:"invalid user"})
  }else{
    const Token=await jwt.sign({id:matcheduser.id},SECRET_KEY)
    console.log(Token)
    res.json({success:true,message:"Login successfully",Token})
  }
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"server error"})
  }
}

const GetProfile=async(req,res)=>{
  try {
    const iduser=req.userId.id
    const user=await userschema.findById(iduser)
    if(!user){
      return(
        res.status(404).json({message:"user not found"})
      )
    }
    res.status(200).json({message:"user found",user})
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"server error"})

  }
}

const UpdateProfile=async(req,res)=>{
  try {
    const iduser=req.userId.id
    const user=await userschema.findById(iduser)
    if(!user){
      return(
        res.status(404).json({message:"user not found"})
      )
    }
    // res.status(200).json({message:"user found",user})
    const updateform=({
      name:req.body.uname,
      email:req.body.uemail,
      phone:req.body.uphone,
      address:req.body.uaddress

    })
    const updateprofile=await userschema.findByIdAndUpdate(iduser,updateform,{new:true})
    res.status(200).json({message:"profile updated successfully",user:updateprofile})
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"server error"})

  }
}
module.exports={Adduser,Getuser,GetUserById,DeleteUser,Login,UpdateProfile,GetProfile};