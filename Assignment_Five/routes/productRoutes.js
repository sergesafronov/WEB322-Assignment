// productRoutes.js

const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, createProduct, deleteProduct } = require('../services/productServices');

// GET products
router.get('/products', async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a product
router.get('/products/:id', async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const product = await getProductById(productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a product
router.post('/products', async (req, res) => {
    try {
        const newProduct = await createProduct(req.body);
        res.json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a product
router.delete('/products/:id', async (req, res) => {
    try {
        await deleteProduct(parseInt(req.params.id));
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
