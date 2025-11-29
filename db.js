const mongoose=require("mongoose")
require('dotenv').config()

const mongoURL=process.env.MONGO_URI

const connectToMongo=async()=>{
    try{
        await mongoose.connect(mongoURL);
        console.log("connect to mongo successfull");
    }
    catch(error){
      console.log("error in connecting to mongo",error);
    }
}
module.exports=connectToMongo;