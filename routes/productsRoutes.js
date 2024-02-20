// routes/productsRoutes.js

const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.getAllProducts);
router.get('/:productId', productsController.getProductById);
router.post('/', productsController.createProduct);
// Add more routes as needed

module.exports = router;
