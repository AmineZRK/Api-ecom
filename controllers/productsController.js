// controllers/productsController.js

const Product = require('../models/productModel');
const Category = require('../models/Category');
const mongoose=require('mongoose')
const { ObjectId } = require('mongoose').Types;

async function getAllProducts(req, res) {
    try {
        const products = await Product.getAllProducts();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getProductById(req, res) {
    const { productId } = req.params;
    try {
        const product = await Product.getProductById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createProduct(req, res) {
    const { title, price, description, categoryId, images } = req.body;
    try {
        // Fetch category details using categoryId
        const category = await Category.getCategoryById(categoryId);
        console.log(new mongoose.Types.ObjectId(category.id));
        
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        
        const productData = {
            title,
            price,
            description,
            images,
            category: {
                id: new mongoose.Types.ObjectId(category.id),
                name: category.name,
                image: category.image,
            }
        };

        const result = await  Product.createProduct(productData);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


// Add more controller functions as needed

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    // Add other functions here
};
