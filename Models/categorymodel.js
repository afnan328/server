
const mongoose=require('mongoose')

const categoryschema=new mongoose.Schema({
    category_name:{type:String,required:true},
    category_desc:{type:String,required:true},
    date:{type:Date,default:Date.now}

    
})

module.exports=mongoose.model('Category',categoryschema)