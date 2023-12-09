// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, createProduct, deleteProduct } = require('../services/productServices');
const isAuthenticated = require('../middleware/authMiddleware');

// GET products 
router.get('/products', isAuthenticated, async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 25;

    try {
        const { products, hasNextPage, hasPreviousPage, currentPage } = await getAllProducts(page, limit);

        res.render('productList', {
            title: 'Product List',
            products,
            hasNextPage,
            hasPreviousPage,
            currentPage,
            nextPage: currentPage + 1,
            previousPage: currentPage - 1
        });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { error: 'Internal Server Error' });
    }
});

// GET a product
router.get('/products/:id', isAuthenticated, async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const product = await getProductById(productId);

        if (product) {
            res.render('productDetails', { title: 'Product Details', product: product });
        } else {
            res.status(404).render('error', { title: 'Error', error: 'Product not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { title: 'Error', error: 'Internal Server Error' });
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
