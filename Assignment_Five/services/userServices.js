// services/userServices.js

const { User, Order, sequelize } = require('../models');

const getAllUsers = async () => {
    return await User.findAll({
        order: [['id', 'ASC']],
    });
};

const getUserById = async (userId) => {
    return await User.findByPk(userId, {
        include: [{
            model: Order,
            as: 'orders'
        }]
    });
};

const createUser = async (userData) => {
    const transaction = await sequelize.transaction();
    try {
        const newUser = await User.create(userData, { transaction });
        await transaction.commit();
        return newUser;
    } catch (error) {
        if (transaction) await transaction.rollback();
        throw error;
    }
};

const deleteUser = async (userId) => {
    const transaction = await sequelize.transaction();
    try {
        await Order.destroy({ where: { userId: userId }, transaction });
        await User.destroy({ where: { id: userId }, transaction });
        await transaction.commit();
    } catch (error) {
        if (transaction) await transaction.rollback();
        throw error;
    }
};

module.exports = { getAllUsers, getUserById, createUser, deleteUser };
