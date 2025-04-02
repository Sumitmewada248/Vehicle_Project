const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required']
    },
    description: {
        type: String,
        required: [true, 'Product description is required']
    },
    brand: {
        type: String,
        required: [true, 'Product brand is required']
    },
    category: {
        type: String,
        required: [true, 'Product category is required']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required']
    },
    defaultimage: {
        type: String,
        required: [true, 'Product default image is required']
    },
    images: [{
        type: String,
        required: [true, 'Product images are required']
    }]
});

module.exports = mongoose.model('Product', productSchema);
