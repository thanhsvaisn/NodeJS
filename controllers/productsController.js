const Product = require('../models/Product');

module.exports = {
  // Get all products
  async index(req, res) {
    try {
      const products = await Product.find();
      res.render('products/index', { products });
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  },

  // Show form to create new product
  newProduct(req, res) {
    res.render('products/new');
  },

  // Create a new product
  async create(req, res) {
    try {
      const { productCode, productName, productDate, productOriginPrice, quantity, productStoreCode } = req.body;
      const product = new Product({
        productCode,
        productName,
        productDate,
        productOriginPrice,
        quantity,
        productStoreCode,
      });
      await product.save();
      res.redirect('/products');
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  },

  // Delete a product
  async delete(req, res) {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.redirect('/products');
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  },
};