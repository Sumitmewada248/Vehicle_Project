
const express = require("express"); 
const router = express.Router();
const uploads = require("../middleware/multer");
const Admin = require("../controller/adminController");


router.post("/adminlogin", Admin.adminLogin);
router.post("/addproduct", uploads.upload.array("image",6), Admin.addProduct)
router.get("/showproduct", Admin.showProduct)

module.exports = router;