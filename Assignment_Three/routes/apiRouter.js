// Import necessary modules
const express = require('express');
const router = express.Router();

// Temporary data for users and products
let users = require('../data/fakeUsers.json');
let products = [];

// User CRUD endpoints
router.get('/users', (req, res) => {
    res.json(users);
});

router.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

router.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);
    res.json({ success: true });
});

router.post('/users', (req, res) => {
    const newUser = req.body; 
    users.push(newUser);
    res.status(201).json(newUser);
});

// Product CRUD endpoints
router.get('/products', (req, res) => {
    res.json(products);
});

router.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

router.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(p => p.id !== productId);
    res.json({ success: true });
});

router.post('/products', (req, res) => {
    const newProduct = req.body; // 
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Authentication endpoint
router.post('/login', (req, res) => {
    const { email, password } = req.body; 
    const user = users.find(u => u.email === email && u.password === password);
    if (user && user.isAdmin) {
        res.json({ isAuthenticated: true });
    } else {
        res.status(401).json({ isAuthenticated: false });
    }
});

module.exports = router;
