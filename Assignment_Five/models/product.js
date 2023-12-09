// models/product.js

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DECIMAL,
        discountPercentage: DataTypes.FLOAT,
        rating: DataTypes.FLOAT,
        stock: DataTypes.INTEGER,
        brand: DataTypes.STRING,
        category: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        images: DataTypes.JSON,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    });

    Product.associate = (models) => {
        Product.hasMany(models.Order, {
            foreignKey: 'productId',
            as: 'orders'
        });
    };
    
    return Product;
};