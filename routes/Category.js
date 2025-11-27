const express = require("express")
const router = express.Router()
const {addCategory,GetCategory, DeleteCategory,updateCategory, GetcategoryById}= require("../controller/categorycontroller")

router.post("/AddCategory", addCategory)
router.get("/GetCategory",GetCategory )
router.delete("/DeleteCategory/:cid",DeleteCategory )
router.get('/GetCategoryById/:catid',GetcategoryById)   
router.put('/Updatecategory/:catid',updateCategory)

module.exports = router