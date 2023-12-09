// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, deleteUser } = require('../services/userServices');
const isAuthenticated = require('../middleware/authMiddleware'); 

// GET users
router.get('/users', isAuthenticated, async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 25;

    try {
        const { users, hasNextPage, hasPreviousPage, currentPage } = await getAllUsers(page, limit);

        res.render('userList', {
            title: 'User List',
            users,
            hasNextPage,
            hasPreviousPage,
            currentPage,
            nextPage: currentPage + 1,
            previousPage: currentPage - 1
        });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { error: 'Internal Server Error' });
    }
});

// GET a user
router.get('/users/:id', isAuthenticated, async (req, res) => {
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
        res.json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { title: 'Error', error: 'Internal Server Error' });
    }
});

// DELETE a user
router.delete('/users/:id', async (req, res) => {
    try {
        await deleteUser(parseInt(req.params.id));
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).render('error', { error: 'Internal Server Error' });
    }
});

module.exports = router;
