// userRoutes.js

const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, deleteUser } = require('../services/userServices');

// GET users
router.get('/users', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.render('userList', { title: 'User List', users: users });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { error: 'Internal Server Error' });
    }
});

// GET a user
router.get('/users/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await getUserById(userId);

        if (user) {
            res.render('userDetails', { title: 'User Details', user: user });
        } else {
            res.status(404).render('error', { title: 'Error', error: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { title: 'Error', error: 'Internal Server Error' });
    }
});

// POST a user
router.post('/users', async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.redirect('/users/' + newUser.id);
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { title: 'Error', error: 'Internal Server Error' });
    }
});

// DELETE a user
router.delete('/users/:id', async (req, res) => {
    try {
        await deleteUser(parseInt(req.params.id));
        res.redirect('/users');
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { error: 'Internal Server Error' });
    }
});

module.exports = router;
