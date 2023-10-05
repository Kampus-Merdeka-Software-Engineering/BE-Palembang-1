const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');

const Product = sequelize.define('Product', {
    nama_product: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    size: {
        type: DataTypes.STRING, // Menyimpan ukuran produk (misalnya: S, M, L)
    },
    harga: {
        type: DataTypes.STRING, // Menyimpan harga produk dalam format desimal
    },
    category: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'products',
    timestamps: false
});

module.exports = Product;
