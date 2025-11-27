// jwt used for security authenticate & authorization
const jwt=require('jsonwebtoken')
const SECRET_KEY="mernstack" //used to sign and verify jwt token

const authuser=async(req,res,next)=>{
    try {
        const userToken=await req.header("auth-token")
        if(userToken){
            const userdata=await jwt.verify(userToken,SECRET_KEY);
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