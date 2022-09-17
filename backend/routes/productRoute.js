const express = require("express");
const { createNewProduct,
    getAllProducts,
    deleteProduct,
    updateProduct,
    getProductDetails } = require("../controllers/productController");

const router = express.Router();

router.route("/product/new").post(createNewProduct);

router.route("/products").get(getAllProducts);

router.route("/product/:id")
    .get(getProductDetails)
    .delete(deleteProduct)
    .put(updateProduct);

module.exports = router;