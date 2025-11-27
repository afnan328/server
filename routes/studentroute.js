const express=require('express')
const Addstudent=require('../controller/studentcontroller')
const Router=express.Router()

Router.post('/Addstudent',Addstudent)
module.exports=Router