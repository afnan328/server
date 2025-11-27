const express=require('express')
const router=express.Router()
const {Addproduct,Getproduct,Updateproduct}=require('../controller/productcontroller')
const Upload=require('../Middleware/upload')


router.post('/Addproduct',Upload.single('pimage') , Addproduct)
router.get('/Getproduct',Getproduct)
router.get('/Getproduct',Upload.single('pimage'),Updateproduct)


module.exports=router