const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    amount: Number,
    ProductName: String,
    CustomerName: String,
    Address: String,
    Contact: String,
    Email: String,
    DateNow: { type: Date, default: Date.now },
});

module.exports = mongoose.model('order', OrderSchema);

