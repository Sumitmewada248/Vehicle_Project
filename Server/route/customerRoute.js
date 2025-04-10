

const express = require('express');
const router = express.Router();
const Customer = require('../controller/customerController');

router.post('/register', Customer.registerCustomer);
router.post('/login', Customer.loginCustomer);
router.get('/userauthenticate',Customer.userAuthenticate);
router.post('/getuser',Customer.GetUser);
router.post("/searchproduct",Customer.searchProduct);
module.exports = router;