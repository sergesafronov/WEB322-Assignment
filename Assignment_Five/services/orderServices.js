// services/orderServices.js

const { Order, User, Product, sequelize } = require('../models');

const getOrderById = async (orderId) => {
    return await Order.findByPk(orderId, {
        include: [
            { model: User, as: 'user' },
            { model: Product, as: 'product' }
        ]
    });
};

const getAllOrders = async () => {
    return await Order.findAll({
        order: [['id', 'ASC']],
    });
};

const createOrder = async (orderData) => {
    const transaction = await sequelize.transaction();
    try {
        const newOrder = await Order.create(orderData, { transaction });
        await transaction.commit();
        return newOrder;
    } catch (error) {
        if (transaction) await transaction.rollback();
        throw error;
    }
};

const deleteOrder = async (orderId) => {
    const transaction = await sequelize.transaction();
    try {
        await Order.destroy({ where: { id: orderId }, transaction });
        await transaction.commit();
    } catch (error) {
        if (transaction) await transaction.rollback();
        throw error;
    }
};

module.exports = { getOrderById, getAllOrders, createOrder, deleteOrder };
