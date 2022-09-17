const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, "Product name is Required!"],
        minLength: [3, "Product Name Should have atleast 3 character!"],
        maxLength: [40, "Product Name Should not exceed 40 character!"],
    },
    productPrice: {
        type: Number,
        required: [true, "Product Price is Required!"],
        minLength: [1, "Product Price should have atleast 1 digit!"],
        maxLength: [8, "Product Price should not exceed 8 digits!"],
    },
    productDesc: {
        type: String,
        required: [true, "Product Description is Required!"],
        minLength: [10, "Product Description Should have atleast 10 character!"],
        maxLength: [200, "Product Description Should not exceed 200 character!"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("ProductModel", productSchema);