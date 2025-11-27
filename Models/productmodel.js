const mongoose=require('mongoose')

const productschema=new mongoose.Schema({
    product_name:{type:String,required:true},
    product_desc:{type:String,required:true},
    product_image:{type:String,required:false},
    product_price:{type:Number,required:true},
    product_qty:{type:Number,required:true},
    categoryId:{ type:mongoose.Schema.Types.ObjectId,ref:'category',required:false },

})

module.exports=mongoose.model('product',productschema)