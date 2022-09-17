const productModel = require("../model/productModel");

exports.createNewProduct = async (req, res) => {

    try {

        const findProduct = await productModel.findOne({ productName: req.body.productName });

        if (findProduct) {
            res.status(400).json({
                success: false,
                message: "Product is already in database!"
            });
        }
        else {

            const createProduct = await productModel.create(req.body);

            if (createProduct)
                res.status(200).json({
                    success: true,
                    message: "Product have been created!"
                });
        }
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

exports.getAllProducts = async (req, res) => {

    try {

        const allProducts = await productModel.find({});

        res.status(200).json({
            success: true,
            products: allProducts
        });

    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
}

exports.getProductDetails = async (req, res) => {

    try {

        const product = await productModel.findById(req.params.id);

        res.status(200).json({
            success: true,
            product: product
        });

    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
}

exports.deleteProduct = async (req, res) => {

    try {
        const deleteProduct = await productModel.findByIdAndDelete(req.params.id);

        if (deleteProduct)
            res.status(200).json({
                success: true,
                message: "Product has been deleted successfully!"
            });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }
}

exports.updateProduct = async (req, res) => {

    try {
        const updateProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (updateProduct)
            res.status(200).json({
                success: true,
                message: "Product has been deleted successfully!",
            })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
    }

}