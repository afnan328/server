const multer=require('multer')
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'Uploads/')//this is a folder where files will be saved
    },

    filename:function(req,file,cb){//it'll generate a unique name of datetime and some random numbers
        const uniquename=Date.now()+"-"+Math.round(Math.random()*1E9)
        cb(null,file.fieldname+'-'+uniquename)
    }
})

const Upload=multer({storage:storage})
module.exports=Upload;
// set the destination folder where files should be stored