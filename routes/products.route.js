const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

// Get all products
router.get('/', productController.index);

// Show form to create new product
router.get('/new', productController.newProduct);

// Create a new product
router.post('/', productController.create);

// Delete a product
router.delete('/:id', productController.delete);

module.exports = router;
