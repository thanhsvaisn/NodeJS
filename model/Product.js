const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productCode: { type: String, required: true },
    productName: { type: String, required: true },
    productDate: { type: Date, required: true },
    productOriginPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    productStoreCode: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);