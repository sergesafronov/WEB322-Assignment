// Import necessary modules
const express = require('express');
const router = express.Router();

// Hardcoded credentials for admin
const ADMIN = {
    username: 'admin',
    password: '123'
};

// GET route for the login page
router.get('/', (req, res) => {
    res.render('login', { title: 'Login Page' });
});

// POST route for the login logic
router.post('/', (req, res) => {
    if (req.body.username === ADMIN.username && req.body.password === ADMIN.password) {
        res.redirect('/list');
    } else {
        res.redirect('/alert');
    }
});

module.exports = router;