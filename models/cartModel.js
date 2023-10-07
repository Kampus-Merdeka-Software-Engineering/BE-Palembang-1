const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelizeConfig');


const Cart = sequelize.define('Cart', {

  amount: DataTypes.INTEGER,

},{
    tableName: 'carts',
    timestamps: false
});

module.exports = Cart;