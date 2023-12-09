// models/user.js

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dob: DataTypes.DATE,
        company: DataTypes.STRING,
        phone: DataTypes.STRING,
        company: DataTypes.STRING,
        phone: DataTypes.STRING,        
        createdAt: DataTypes.DATE,       
        updatedAt: DataTypes.DATE       
    });

    User.associate = (models) => {
        User.hasMany(models.Order, {
            foreignKey: 'userId',
            as: 'orders'
        });
    };

    return User;
};