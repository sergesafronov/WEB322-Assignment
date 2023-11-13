const express = require('express');
const router = express.Router();
const ProductService = require('../services/products');
const productsData = require('../data/fakeProducts.json');
const productService = new ProductService(productsData);

// GET all products
router.get('/', (req, res) => {
    res.json(productService.getAllProducts());
});

// GET a single product by ID
router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = productService.getProductById(productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

// DELETE a product by ID
router.delete('/:id', (req, res) => {
    const success = productService.deleteProduct(parseInt(req.params.id));
    if (success) {
        res.json({ success: true });
    } else {
        res.status(404).send('Product not found');
    }
});

// POST a new product
router.post('/', (req, res) => {
    const newProduct = productService.addProduct(req.body);
    res.status(201).json(newProduct);
});

module.exports = router;