const mongoose=require('mongoose')
 const studentschema=new mongoose.Schema({

    sname:{type:String},
    semail:{type:String},

    spassword:{type:String},
    sphone:{type:Number},
    saddress:{type:String},
    date:{type:Date,default:Date.now}
 })
   
  module.exports=mongoose.model('student',studentschema)