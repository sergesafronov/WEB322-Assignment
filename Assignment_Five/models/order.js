// order.js

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        orderDate: DataTypes.DATE        
    });

    Order.associate = (models) => {
        Order.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user'
        });

        Order.belongsTo(models.Product, {
            foreignKey: 'productId',
            as: 'product'  });
        };
    
    return Order;
};