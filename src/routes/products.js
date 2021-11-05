const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

// CREATE -> POST
router.get('/product', productsController.createProduct) 

// READ -> GET
router.post('/products', productsController.getAllProducts)



module.exports = router;