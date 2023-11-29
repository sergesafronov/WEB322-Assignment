// userRoutes.js

const express = require('express');
const router = express.Router();
const { User, sequelize } = require('../models');

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
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const newUser = await User.create(req.body, { transaction });
        await transaction.commit();
        res.redirect('/details/' + newUser.id);
    } catch (error) {
        console.error(error);
        if (transaction) {
            await transaction.rollback();
        }
        res.status(500).render('error', { title: 'Error', error: 'Internal Server Error' });
    }
});

// DELETE a user
router.delete('/delete/:id', async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        await User.destroy({ where: { id: parseInt(req.params.id) }, transaction });
        await transaction.commit();
        res.redirect('/list');
    } catch (error) {
        console.error(error);
        if (transaction) {
            await transaction.rollback();
        }
        res.status(500).render('error', { error: 'Internal Server Error' });
    }
});


module.exports = router;