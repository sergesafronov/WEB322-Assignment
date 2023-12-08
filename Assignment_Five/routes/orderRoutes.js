// orderRoutes.js

const express = require('express');
const router = express.Router();
const { getOrderById, getAllOrders, createOrder, deleteOrder } = require('../services/orderServices');

// GET an order
router.get('/orders/:id', async (req, res) => {
    try {
        const order = await getOrderById(parseInt(req.params.id));
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

// GET orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await getAllOrders();
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST an order
router.post('/orders', async (req, res) => {
    try {
        const newOrder = await createOrder(req.body);
        res.json(newOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE an order
router.delete('/orders/:id', async (req, res) => {
    try {
        await deleteOrder(parseInt(req.params.id));
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
