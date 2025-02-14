// userRoutes.js

const express = require('express');
const router = express.Router();
const { User, Order, sequelize } = require('../models');

// Alert page
router.get('/alert', (req, res) => {
    res.render('alert', { title: 'Alert' });
});

// GET users
router.get('/list', async (req, res) => {
    try {
        const users = await User.findAll({
            order: [['id', 'ASC']],
          });
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
        const user = await User.findByPk(userId, {
            include: [{
                model: Order,
                as: 'orders'
            }]
        });
        if (user) {
            res.render('details', { title: 'User Details', user: user });
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

// DELETE a user and related orders
router.delete('/delete/:id', async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const userId = parseInt(req.params.id);

        await Order.destroy({
            where: { userId: userId },
            transaction: transaction
        });

        await User.destroy({
            where: { id: userId },
            transaction: transaction
        });

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