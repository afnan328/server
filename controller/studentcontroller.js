const studentschema=require('../Models/studentmodel')
const Addstudent=async(req,res)=>{

    try {
        
        const{sname,semail,spassword,sphone,saddress}=req.body
        const studentdata=new studentschema({sname,semail,spassword,sphone,saddress})
        await studentdata.save()
        console.log('student added')
    } catch (error) {
        console.log(error)
        
    }
}

module.exports=Addstudent;