// userRoutes.js

const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Alert page
router.get('/alert', (req, res) => {
    res.render('alert', { title: 'Alert' });
});

// GET users
router.get('/list', async (req, res) => {
    try {
        const users = await User.findAll();
        res.render('list', { title: 'User List', users });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { error: 'Internal Server Error' });
    }
});

// GET a user
router.get('/details/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await User.findByPk(userId);
        if (user) {
            res.render('details', { title: 'User Details', user });
        } else {
            console.error(error);
            res.status(404).render('error', { error: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { error: 'Internal Server Error' });
    }
});

// POST a user
router.post('/create', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.redirect('/details/' + newUser.id);
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { title: 'Error', error: 'Internal Server Error' });
    }
});

// DELETE a user
router.delete('/delete/:id', async (req, res) => {
    try {
        await User.destroy({ where: { id: parseInt(req.params.id) } });
        res.redirect('/list'); // Redirect to the list page after deletion
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { error: 'Internal Server Error' });
    }
});

module.exports = router;