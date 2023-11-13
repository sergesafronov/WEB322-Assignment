const express = require('express');
const router = express.Router();
const UserService = require('../services/users.js'); 
const userService = new UserService();

router.get('/list', (req, res) => {
    const users = userService.getAllUsers();
    res.render('list', { title: 'List', users });
});

router.get('/details/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = userService.getUserById(userId);
    if (user) {
        res.render('details', { user: user, title: 'User Details' });
    } else {
        res.status(404).send('User not found');
    }    
});

router.get('/alert', (req, res) => {
    res.render('alert', { title: 'Alert' });
});

// GET all users
router.get('/', (req, res) => {
    res.json(userService.getAllUsers());
});

// GET a single user by ID
router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = userService.getUserById(userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// DELETE a user by ID
router.delete('/:id', (req, res) => {
    const success = userService.deleteUser(parseInt(req.params.id));
    if (success) {
        res.json({ success: true });
    } else {
        res.status(404).send('User not found');
    }
});

// POST a new user
router.post('/', (req, res) => {
    const newUser = userService.addUser(req.body);
    res.status(201).json(newUser);
});

module.exports = router;