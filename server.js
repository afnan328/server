//1
const express=require('express');
require('dotenv').config()
//2
const app=express();
const cors=require('cors');


//cros=Cross origin Resource Sharing
 app.use(cors())
 app.use(express.json())


//3
const connectToMongo = require("./db")
connectToMongo();
//4
const PORTNO=process.env.PORT;
app.listen(PORTNO,()=>{
    console.log("server is running on portnumber"+PORTNO)
});

//5  
app.get('/api',(req,res)=>{
    res.send("Hello Postman")
});

app.use('/api/user',require('./routes/userroute'))
app.use('/api/student',require('./routes/studentroute'))
app.use('/api/category', require("./routes/Category"))
app.use('/api/product', require("./routes/product_route"))
app.use('/api/image/',express.static("./Uploads"))