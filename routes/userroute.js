const express=require('express')
const {Adduser,Getuser,GetUserById,DeleteUser,Login,GetProfile, UpdateProfile}=require('../controller/usercontroller')
const { get } = require('mongoose')
const authuser=require('../Middleware/Authuser')
const Router=express.Router()

Router.post('/Adduser',Adduser)
Router.get('/Getuser',Getuser)
Router.get('/GetuserById/:uid',GetUserById)
Router.delete('/DeleteUser/:mid',DeleteUser)
Router.post('/Login',Login)
Router.get('/GetProfile',authuser,GetProfile)
Router.put('/UpdateProfile',authuser,UpdateProfile)

module.exports=Router