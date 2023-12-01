// productRoutes.js

const express = require('express');
const router = express.Router();
const { Product, Order, sequelize } = require('../models');

// GET products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll({
            order: [['id', 'ASC']],
          });
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

// DELETE a product and its orders
router.delete('/products/:id', async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const productId = parseInt(req.params.id);

        await Order.destroy({
            where: { productId: productId },
            transaction: transaction
        });

        await Product.destroy({
            where: { id: productId },
            transaction: transaction
        });

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
