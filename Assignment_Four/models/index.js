//index.js

const Sequelize = require('sequelize');

const sequelize = new Sequelize('SenecaDB', 'sergesafronov', 'JlUXy8SdDHV1', {
    host: 'ep-calm-hat-49732682-pooler.us-east-2.aws.neon.tech',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
    query: { raw: true },
});

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Product = require('./product')(sequelize, Sequelize.DataTypes);
const Order = require('./order')(sequelize, Sequelize.DataTypes);

module.exports = { sequelize, Sequelize, User, Product, Order };
