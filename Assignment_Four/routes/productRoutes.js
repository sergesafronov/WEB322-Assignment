// productRoutes.js

const express = require('express');
const router = express.Router();
const { Product, sequelize } = require('../models');

// GET products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll();
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
        const product = await Product.findByPk(productId);
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
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const newProduct = await Product.create(req.body, { transaction });
        await transaction.commit();
        res.json(newProduct);
    } catch (error) {
        console.error(error);
        if (transaction) {
            await transaction.rollback();
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a product
router.delete('/products/:id', async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        await Product.destroy({ where: { id: parseInt(req.params.id) }, transaction });
        await transaction.commit();
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        if (transaction) {
            await transaction.rollback();
        }
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
