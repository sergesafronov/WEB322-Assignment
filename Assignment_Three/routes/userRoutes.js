// Import necessary modules
const express = require('express');
const router = express.Router();
const users = require("../data/fakeUsers.json");

// GET route for listing users
router.get('/list', (req, res) => {
    res.render('list', { title: 'List', users });
});

// GET route for user details
router.get('/details/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);    
    res.render('details', { user: user, title: 'User Details' });    
});

// GET route for alert page
router.get('/alert', (req, res) => {
    res.render('alert', { title: 'Alert' });
});

module.exports = router;