//orderRoutes.js

const express = require('express');
const router = express.Router();
const { Order } = require('../models');

// GET orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GEt an order
router.get('/orders/:id', async (req, res) => {
    try {
        const orderId = parseInt(req.params.id);
        const order = await Order.findByPk(orderId);
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST an order
router.post('/orders', async (req, res) => {
    try {
        const newOrder = await Order.create(req.body);
        res.json(newOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE an order
router.delete('/orders/:id', async (req, res) => {
    try {
        await Order.destroy({ where: { id: parseInt(req.params.id) } });
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;