const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');
const Cart = require('./cartModel'); 

const Product = sequelize.define('Product', {
    nama_product: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    size: {
        type: DataTypes.STRING,
    },
    harga: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'products',
    timestamps: false
});

Product.hasMany(Cart);
Cart.belongsTo(Product);

module.exports = Product;
