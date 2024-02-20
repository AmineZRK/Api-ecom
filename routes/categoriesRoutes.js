// routes/categoriesRoutes.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoriesController');

// Route to get all categories
router.get('/', categoryController.getAllCategories);

// Route to get a single category by ID
router.get('/:categoryId', categoryController.getCategoryById);

// Route to create a new category
router.post('/', categoryController.createCategory);

// Route to update a category
router.put('/:categoryId', categoryController.updateCategory);

// Route to delete a category
router.delete('/:categoryId', categoryController.deleteCategory);

// Route to get all products by category
router.get('/:categoryId/products', categoryController.getProductsByCategory);

module.exports = router;
