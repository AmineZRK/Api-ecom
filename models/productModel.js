// models/productModel.js

const Product = require('./product');

async function getAllProducts() {
    try {
        return await Product.find();
    } catch (error) {
        throw error;
    }
}

async function getProductById(productId) {
    try {
        return await Product.findById(productId);
    } catch (error) {
        throw error;
    }
}

async function createProduct(productData) {
    try {
        return await Product.create(productData);
    } catch (error) {
        throw error;
    }
}

// Add more CRUD operations as needed

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    // Add other functions here
};
