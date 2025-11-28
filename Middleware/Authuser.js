// jwt used for security authenticate & authorization
const jwt=require('jsonwebtoken')
require('dotenv').config()
const SECRETE=process.env.SECRET_KEY //used to sign and verify jwt token

const authuser=async(req,res,next)=>{
    try {
        const userToken=await req.header("auth-token")
        if(userToken){
            const userdata=await jwt.verify(userToken,SECRETE);
            req.userId=userdata;
            next();
            
        }else{
            res.json({success:false,message:"unauthorized Token"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"server error"})
    }
}

module.exports=authuser;