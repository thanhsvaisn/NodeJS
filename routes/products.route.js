const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// GET all products
router.get('/', productsController.getAllProducts);

// POST create a new product
router.post('/', productsController.createProduct);

// DELETE delete a product by ID
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
