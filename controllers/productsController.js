const Product = require('../models/Product');

// Other controller methods using Product
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.render('products', { products }); // Render view with products
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createProduct = async (req, res) => {
    const { productCode, productName, productOriginPrice, quantity, productStoreCode } = req.body;
    try {
        const product = new Product({
            productCode,
            productName,
            productOriginPrice,
            quantity,
            productStoreCode
        });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};