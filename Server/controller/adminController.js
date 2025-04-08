

const Admin = require('../model/adminModel');
const Product = require('../model/ProductModel');
const OrderModel=require("../model/OrderModel")
const adminLogin = async (req, res) => {
  const { adminid, password } = req.body;
  if (adminid === "sumit" && password === "1234") {
    res.status(200).json({
       msg: "Admin Login Successfully",

    });
  } else {
    res.status(401).json({
      msg: "Invalid Credentials"
    });
  }


 
  
}

const addProduct = async (req, res) => {

    const imageUrls=req.files.map(file=>file.path)
    const { name, description, brand, category, price } = req.body
    await Product.create({
        name:name,
        description:description, 
        brand:brand,
        category:category,
        price:price,
        defaultimage:imageUrls[0],
        images:imageUrls

    })
res.status(200).send("Product Added Successfully")

}

const showProduct = async (req, res) => {
  const product = await Product.find()
  res.status(200).json(product)
}

const CustomerOrder=async(req,res)=>{
  
  
}
module.exports = {
    adminLogin,
    addProduct,
    showProduct,
    
    CustomerOrder
}