const CustomerModel= require('../model/customerModel');
const ProductModel= require('../model/ProductModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerCustomer = async (req, res) => {
    const { name, email, password ,address,city,contact} = req.body;
    const saltRounds = 10; // 10 rounds is the default
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt); 

    try{
        const customer = await CustomerModel.create({
           name: name,
           email: email,
           password: hashedPassword,
           address:address,
           city:city,
          contact:contact
        });
        res.status(200).json({msg:"Customer registered successfully"});
    }

    catch(err){
        console.log(err);
        res.status(500).json({msg:"Internal server error"});
    }
}

const loginCustomer = async (req, res) => {
    const { email, password } = req.body;

    try {
        const customer = await CustomerModel.findOne({ email: email });
        if (!customer) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, customer.password);
        if (!isPasswordValid) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }
        const token = jwt.sign({ id: customer._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ msg: "Login successful", token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" });
    }
}
const userAuthenticate = async (req, res) => {
    const {authorization} = req.headers;
    const token = authorization.split(" ")[1];

    try {
        const decodedToken = jwt.verify(token,  process.env.JWT_SECRET);
        console.log(decodedToken.id);
      const Customer = await CustomerModel.findById(decodedToken.id).select("-password");

      console.log(Customer);

      res.status(200).send(Customer);
     
    } catch (error) {
         console.log(error);
     }

}

const GetUser = async (req, res) => {
    const {userid} = req.body;
    try {
        const Customer = await CustomerModel.findById(userid).select("-password");
        res.status(200).send(Customer);
    } catch (error) {
        console.log(error);
    }
}

const searchProduct = async (req, res) => {
    const { category } = req.body;
    try {
        const Product = await ProductModel.find({ category });
        res.status(200).send(Product);
    } catch (error) {
        console.log(error);
    }

}



module.exports = {
    registerCustomer,
    loginCustomer,
    userAuthenticate,
    GetUser,
    searchProduct
}