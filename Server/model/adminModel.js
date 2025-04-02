const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    adminid: {
        type: String,
        required: [true, "Admin ID is required"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true
    }
});

module.exports = mongoose.model("admin", adminSchema);
