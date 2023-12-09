// services/productServices.js

const { Product, Order, sequelize } = require('../models');


const getAllProducts = async (page = 1, limit = 25) => {
    const offset = (page - 1) * limit;
    const products = await Product.findAll({
        limit: limit,
        offset: offset,
        order: [['id', 'ASC']],
    });
    const totalProducts = await Product.count();
    return {
        products,
        totalProducts,
        currentPage: page,
        hasNextPage: offset + limit < totalProducts,
        hasPreviousPage: page > 1
    };
};

const getProductById = async (productId) => {
    return await Product.findByPk(productId);
};

const createProduct = async (productData) => {
    const transaction = await sequelize.transaction();
    try {
        const newProduct = await Product.create(productData, { transaction });
        await transaction.commit();
        return newProduct;
    } catch (error) {
        if (transaction) await transaction.rollback();
        throw error;
    }
};

const deleteProduct = async (productId) => {
    const transaction = await sequelize.transaction();
    try {
        await Order.destroy({ where: { productId: productId }, transaction });
        await Product.destroy({ where: { id: productId }, transaction });
        await transaction.commit();
    } catch (error) {
        if (transaction) await transaction.rollback();
        throw error;
    }
};

module.exports = { getAllProducts, getProductById, createProduct, deleteProduct };
