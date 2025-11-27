const express=require("express")

const app=express();


const welcome=require("./testing")

function Hello(){
    console.log("welcome to node js ////....///")
}
Hello();
welcome();

const connectToMongo=require('./db')
connectToMongo();

const port=2000;
app.listen(port,()=>{
    console.log('-------------------')
    console.log("server is running on port"+port);
})